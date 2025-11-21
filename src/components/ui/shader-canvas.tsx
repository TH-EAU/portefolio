import React, { useRef, useEffect } from 'react';

interface WebGLSetupResult {
    gl: WebGLRenderingContext;
    program: WebGLProgram;
}

const ShaderCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const programRef = useRef<WebGLProgram | null>(null);
    const glRef = useRef<WebGLRenderingContext | null>(null);
    const startTimeRef = useRef<number>(Date.now());

    const vertexShaderSource: string = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

    const fragmentShaderSource: string = `
  precision mediump float;

  uniform vec2 iResolution;
  uniform float iTime;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 435758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Fonction pour calculer la distance depuis le centre
  float edgeDistance(vec2 uv) {
    vec2 centered = uv * 2.0 - 1.0;
    return length(centered);
  }

  vec3 getBaseColor(vec2 uv, float time, float distFromCenter) {
    float noiseValue = noise(vec2(uv.x, time));
    float distortion = noise(uv + time) * 1.5;
    uv.x += distortion;
    uv.y += noise(uv + vec2(time, time)) * 15.5;

    float gradientFrequency = mix(1.0, 5.0, noiseValue);
    float gradient = fract(uv.x * gradientFrequency + time);
    gradient = pow(gradient, 1.5);

    // Couleurs chaudes (centre) - jaune doré intense
    vec3 bigYellow = vec3(0.98, 0.65, .35);
    vec3 bigOrange = vec3(0.9, 0.55, .22);
    vec3 littleOrange = vec3(0.8, 0.35, .12);
    vec3 warmBlack = vec3(0.1, 0.05, 0.0);

    // Couleurs coucher de soleil (bords) - rose/violet/orange doux
    vec3 brightPink = vec3(0.95, 0.8, 0.4);
    vec3 sunsetPurple = vec3(0.2, 0.5, 0.6);
    vec3 deepViolet = vec3(0.2, 0.4, 0.3);
    vec3 twilightBlack = vec3(0.15, 0.05, 0.1);

    // Calculer le facteur de mélange entre chaud et froid basé sur la distance
    float coolFactor = smoothstep(0.3, 0.9, distFromCenter);

    // Construire la couleur chaude
    vec3 warmColor = mix(warmBlack, littleOrange, gradient);
    warmColor = mix(warmColor, bigOrange, smoothstep(0.1, 0.8, gradient));
    warmColor = mix(warmColor, bigYellow, smoothstep(0.1, 0.8, gradient));
    warmColor = mix(warmColor, warmBlack, smoothstep(0.985, 1.0, gradient));

    // Construire la couleur coucher de soleil
    vec3 coolColor = mix(twilightBlack, deepViolet, gradient);
    coolColor = mix(coolColor, sunsetPurple, smoothstep(0.1, 0.8, gradient));
    coolColor = mix(coolColor, brightPink, smoothstep(0.1, 0.8, gradient));
    coolColor = mix(coolColor, twilightBlack, smoothstep(0.985, 1.0, gradient));

    // Mélanger entre chaud et froid
    return mix(warmColor, coolColor, coolFactor);
  }

  float vignette(vec2 uv) {
    uv = uv * 2.1 - 1.0;
    float len = dot(uv, uv);
    return smoothstep(1.7, 0.5, len);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float time = iTime * 0.1;

    // Calculer la distance une seule fois
    float dist = edgeDistance(uv);

    float chromaOffset = (-2.5 + random(vec2(-3.5,1))) / iResolution.x;

    vec3 col;
    col.r = getBaseColor(uv + vec2(chromaOffset, 0.002), time, dist).r;
    col.g = getBaseColor(uv, time, dist).g;
    col.b = getBaseColor(uv - vec2(chromaOffset, 0.002), time, dist).b;

    // Appliquer la vignette
    float vig = vignette(uv);
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;

    const createShader = (
        gl: WebGLRenderingContext,
        type: number,
        source: string
    ): WebGLShader | null => {
        const shader = gl.createShader(type);
        if (!shader) {
            console.error('Impossible de créer le shader');
            return null;
        }

        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Erreur de compilation du shader:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    };

    const createProgram = (
        gl: WebGLRenderingContext,
        vertexShader: WebGLShader,
        fragmentShader: WebGLShader
    ): WebGLProgram | null => {
        const program = gl.createProgram();
        if (!program) {
            console.error('Impossible de créer le programme WebGL');
            return null;
        }

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Erreur de liaison du programme:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }

        return program;
    };

    const setupWebGL = (): WebGLSetupResult | null => {
        const canvas = canvasRef.current;
        if (!canvas) {
            console.error('Canvas non disponible');
            return null;
        }

        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL non supporté');
            return null;
        }

        glRef.current = gl;

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        if (!vertexShader || !fragmentShader) {
            console.error('Échec de création des shaders');
            return null;
        }

        const program = createProgram(gl, vertexShader, fragmentShader);
        if (!program) {
            console.error('Échec de création du programme');
            return null;
        }

        programRef.current = program;

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            1, 1,
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        return { gl, program };
    };

    const render = (): void => {
        const canvas = canvasRef.current;
        const gl = glRef.current;
        const program = programRef.current;

        if (!canvas || !gl || !program) return;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);

        gl.useProgram(program);

        const timeLocation = gl.getUniformLocation(program, 'iTime');
        const resolutionLocation = gl.getUniformLocation(program, 'iResolution');

        const currentTime = (Date.now() - startTimeRef.current) / 1000.0;
        gl.uniform1f(timeLocation, currentTime);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        animationRef.current = requestAnimationFrame(render);
    };

    useEffect(() => {
        const result = setupWebGL();
        if (result) {
            render();
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', overflow: 'hidden', borderRadius: '2rem', border: '1px solid rgba(34, 34, 37, 0.3)', filter: "contrast(120%) brightness(.9)" }}>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '90vh',
                    display: 'block',
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
            />
        </div>
    );
};

export default ShaderCanvas;