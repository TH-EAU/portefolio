import PageLayout from "@/components/layout/page-layout"
import { Text, Heading } from "@chakra-ui/react"

const MicroMarketSimulator = () => {
    return (
        <PageLayout caption="/portefolio/caption2.jpg" pageName="Micromarket Simulator">
            <Heading >Project overview</Heading>
            <Text color="gray.200" fontWeight="light">C'est un jeu inspiré de supermarket simulator, réalisé en 3D et avec React. Voila...</Text>
        </PageLayout>
    )
}

export default MicroMarketSimulator