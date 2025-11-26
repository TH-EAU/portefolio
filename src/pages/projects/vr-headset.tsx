import PageLayout from "@/components/layout/page-layout"
import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react"

const VRHeadsetPage = () => {
    return (
        <PageLayout caption="/portfolio/vr_caption.jpg" pageName="Casque VR" description="Un casque VR pour 30€" tags={["3D", "VR", "Unreal Engine", "C#", "Arduino"]}>
            <Stack>
                <Heading>Le projet</Heading>
                <Text>Qui n’a jamais rêvé de créer son propre casque de réalité virtuelle ? Pour ma part, j’y ai longtemps pensé. À la fin de ma licence professionnelle, j’ai proposé comme projet de fin d’études de m’acharner à fabriquer un casque VR fonctionnel, avec un budget de 30 €. C’était en 2016 ; le marché de la VR était alors assez dynamique, mais les solutions disponibles étaient soit trop chères, soit peu efficaces.</Text>
            </Stack>

            <Stack>
                <Heading>Les joyeux débuts</Heading>
                <Text>Nous avons étudié les technologies disponibles à l’époque. L’HTC Vive était alors la meilleure solution : il pouvait scanner les mouvements du joueur en triangulant sa position exacte grâce à trois capteurs très précis. Cependant, le coût de cette technologie ne nous permettait pas de l’envisager pour notre projet.</Text>
                <Text>Ce qui nous a frappés, ce sont les vidéos YouTube de roller‑coaster en VR qui tournaient sur notre téléphone. Il s’agissait simplement d’une projection 3D, le téléphone utilisant son gyroscope et son accéléromètre pour permettre à quiconque plaçant son appareil dans un Google Cardboard de se retrouver dans un casque VR.
                </Text>
                <Text>C’était la technologie qu’il nous fallait. Mais entre faire tourner un jeu vidéo et lire une simple vidéo YouTube sur un téléphone (même aujourd’hui), il y a un monde. Nous avons donc décidé d’externaliser les capteurs : en utilisant une Arduino, un module d’accéléromètre et un gyroscope, il devient possible de récupérer les mouvements de la tête d’une personne en les fixant sur un support.</Text>
                <Text>Les données générées sont transmises via un câble USB long (assez lourd à manipuler), puis acheminées vers un petit module que nous avions développé en C# et WinForms. Ce module assure le lien entre le port COM et le moteur de jeu, ici Unreal Engine.</Text>
                <Text>En associant la position des capteurs à celle de la caméra virtuelle, nous avions déjà l’impression d’avoir mené à bien notre projet.</Text>
            </Stack>

            <Stack>
                <Heading>Le début des problèmes</Heading>
                <Text>Vous l’avez compris : nous avions décidé de faire tourner le jeu vidéo sur notre ordinateur. C’est lui qui allait fournir la puissance nécessaire ainsi que les outils pour créer le jeu autour de notre caméra. Mais comment afficher ce jeu sur un écran intégré à notre casque ?</Text>
                <Text>Nous avons envisagé d’acheter un petit écran externe et de transmettre le flux vidéo en HDMI. Or, la qualité des écrans compacts accessibles financièrement à l’époque aurait entraîné une expérience pixélisée. La meilleure solution était d’utiliser nos téléphones.</Text>
                <Text>Après de nombreuses recherches, nous avons finalement trouvé une application nommée Trinus, qui permet de streamer, via USB, l’écran d’un ordinateur vers un téléphone. Le point fort, c’est que la latence était très faible et que cela fonctionnait parfaitement. Encore mieux ! Trinus est conçu pour la VR ; il nous permet de diffuser le rendu du PC en double sur le téléphone, ce qui évite d’avoir à gérer ce rendu côté Unreal Engine et améliore ainsi les performances. Trinus est un excellent logiciel, riche en paramètres de personnalisation, afin d’assurer la meilleure qualité possible.</Text>
                <Text>Cependant, notre gyroscope semblait fonctionner de façon erratique…</Text>
            </Stack>

            <Stack>
                <Heading>Le problème du gyroscope</Heading>
                <Text>Les informations récupérées depuis le port USB correspondent à la vitesse de rotation du gyroscope. Or, nous voulions déterminer sa position, car c’est cette dernière qui sera reportée sur la caméra virtuelle. En mathématiques, on utilise une intégrale, puisque la dérivée de la position est la vitesse.</Text>
                <Text>En programmation, il n’existe pas de fonction « intégrale », et c’est normal. L’intégrale repose sur une variable t, qui représente le temps. Dans le monde réel, le temps est une dimension continue, dont on ne peut pas approcher la valeur la plus petite. Or, dans le monde virtuel, le temps n’existe pas sous cette forme. L’ordinateur cadencera son fonctionnement à une fréquence donnée, créant des intervalles pendant lesquels rien ne se passe. Autrement dit, pour se rapprocher d’une intégrale, on découpe notre courbe de vitesse selon la fréquence de l’ordinateur et on effectue la somme de toutes les valeurs de vitesse obtenues à chaque intervalle.</Text>
                {/* $$ P(t) = \int_{0}^{t} v(t)d(t) ≈ \sum_{0}^{t}v(t)Ts $$ */}
                <Text>À l’échelle humaine, nous ne percevons rien, mais dans la réalité, des événements se produisent bel et bien entre ces intervalles.</Text>
                <Text>C’est là la difficulté de transcrire des phénomènes mécaniques dans un système informatique. Cette perte de données crée une différence entre la position réelle et la position virtuelle. Sur une courte durée, le problème reste négligeable, mais sur une période d’environ 10 s, le drift devient visible et gênant. Surtout lorsqu’on effectue des mouvements brusques de va‑et‑vient : un changement de position peut apparaître entre les intervalles et augmenter significativement le drift.</Text>
                <Text>Par ailleurs, le gyroscope n’est pas un composant parfait ; il réagit à de nombreux phénomènes parasites. Le gyro‑drift est ainsi un problème récurrent.</Text>
            </Stack>

            <Stack>
                <Heading>La solution</Heading>
                <Text>Nous disposions d’un accéléromètre, qui nous fournit des données sur l’accélération du casque dans l’espace. Même lorsqu’il est très coûteux, l’accéléromètre reste un composant très sensible aux phénomènes extérieurs ; il est donc peu précis sur de courtes durées et ne peut pas être exploité pour récupérer des données de rotation en temps réel. En revanche, contrairement au gyroscope, il est fiable sur le long terme : il ne dérive pas.</Text>
                <Text>Pour simplifier, si le gyroscope dérive, nous pouvons utiliser l’accéléromètre pour déterminer l’écart entre la position 0 réelle et celle actuellement indiquée par le gyroscope. En appliquant ce principe à chaque intervalle de temps, on obtient un filtre qui corrige définitivement le drift du gyroscope !</Text>
                <Image src="/portfolio/VR_gyrodrift.png" />
            </Stack>

            <Stack>
                <Heading>La fin du projet</Heading>
                <Text>Il ne nous restait plus qu’à créer un environnement, et voilà ! Notre casque de réalité virtuelle a pris vie.</Text>
                <Text>Bien sûr, il nécessite encore de nombreuses améliorations, mais la qualité était comparable à celle d’un Oculus Rift de l’époque, et tout cela pour seulement 30 €.</Text>
                <Text>C’est l’un des projets dont je suis le plus fier à ce jour.</Text>

                <Image src="/portfolio/VR_world1.png" />
                <Image src="/portfolio/VR_world2.png" />
            </Stack>

            <Stack my={8}>
                <Heading>Resources</Heading>
                <Link target="_blank" href="/portfolio/documents/VR-CR.pdf">Compte rendu du projet</Link>
            </Stack>
        </PageLayout>

    )
}

export default VRHeadsetPage