import PageLayout from "@/components/layout/page-layout"
import { Text, Heading, Image } from "@chakra-ui/react"

const CssGlassesPage = () => {
    return (
        <PageLayout caption="/portfolio/css_glasses_caption.jpg" pageName="CSS Glasses" description="Extension de visualisation du CSS" tags={["Terminé", "JS", "IA"]}>
            <Heading >Le projet</Heading>
            <Text>CSS Glasses est un petit projet « vibe‑codé » (car il faut se mettre à la page) qui reprend le principe de l’inspecteur du DOM des navigateurs, mais qui affiche les propriétés CSS de manière visuelle et permet également de fixer les surbrillances des éléments à l’écran.</Text>
            <Text>C’est pratique lorsque l’on doit faire des présentations ou des explications, car on peut montrer instantanément les styles appliqués et mettre en évidence les éléments concernés.</Text>
            <Image src="/portfolio/css_glasses.png" />
        </PageLayout>
    )
}

export default CssGlassesPage