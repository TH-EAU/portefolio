import PageLayout from "@/components/layout/page-layout"
import { Text, Heading, Image } from "@chakra-ui/react"

const MicroMarketSimulator = () => {
    return (
        <PageLayout caption="/portfolio/micro_complete.png" pageName="Micromarket Simulator" description="React Three Fiber | Game" tags={["En cours", "React", "R3F"]}>
            <Heading >Project overview</Heading>
            <Text fontWeight="light">Avez-vous déjà rêvé d'ouvrir votre propre mini marché ? Voici le jeux de vos rêves.</Text>
            <Text>
                Micromarket Simulator est un jeu inspiré de Supermarket Simulator dans lequel il est possible de créer et gérer sa boutique. Ici, le jeux est développé en React JS, et avec react-three-fiber.
            </Text>
            <Text>

            </Text>

            <Heading as="h3">Une interface pour acheter les fournitures et les consommables</Heading>
            <Image src="/portfolio/micro_shop.png" />
            <Image src="/portfolio/micro_cart.png" />
            <Image src="/portfolio/micro_conso.png" />
            <Image src="/portfolio/micro_complete.png" />
        </PageLayout>
    )
}

export default MicroMarketSimulator