import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { Link as ScrollLink } from "react-scroll"
import FadeInWrapper from "../ui/fade_in_wrapper"
import HoverCardWrapper from "../ui/hover-card-wrapper"

const WelcomeSection = () => {
    return (
        <Container
            maxW="5xl"
            as="section"
            py={{ base: 12, md: 20 }}
            border="1px solid #222"
            rounded="3xl"
            backdropFilter="blur(10px)"
            p={10}
            id="welcome"
        >
            <FadeInWrapper>
                <Stack flexDir={{ base: 'column', md: "row" }} gap={12}>
                    <Box w={250} h="full">
                        <HoverCardWrapper>
                            <Box border="1px solid #222" w={250} position='relative' backgroundColor="black" p={2}>
                                <Image top={3} left={3} zIndex={1} position="absolute" mixBlendMode="difference" w={5} src="/portfolio/tn_white.png" />
                                <Image position="absolute" zIndex={2} src="/portfolio/dirt.jpg" w="full" h="full" blendMode="overlay" opacity={.05} transition="1s" _hover={{ opacity: .5 }} />
                                <Image boxShadow="md" filter='saturate(0)' zIndex={0} rounded="md" src="/portfolio/profile.png" w="full" h="full" align="right" _hover={{ mixBlendMode: "difference" }} />

                            </Box>
                        </HoverCardWrapper>
                    </Box>
                    <Stack gap={4}>
                        <Heading as="h2" fontSize="xl" fontWeight="lighter">Bienvenue 👋, je m’appelle Théau NICOLAS et j’ai hâte de collaborer avec vous !</Heading>
                        <Text>Fort de 10 ans d’expérience dans le développement web et la
                            gestion de projet, je place la qualité au cœur de chaque projet : code propre,
                            et livrables fiables. Parcourez mon portfolio pour voir
                            concrètement ce que je peux apporter, et n’hésitez pas à me contacter pour
                            discuter de votre prochaine initiative.</Text>
                        <SimpleGrid columns={{ base: 1, lg: 2 }} w={{ base: "full", lg: "80%" }} >
                            <ScrollLink to="work" duration={500} offset={-80} smooth>
                                <Button variant="outline" >Voir mes projets personnels</Button>
                            </ScrollLink>
                            <ScrollLink to="contact" duration={500} offset={-80} smooth>
                                <Button variant="ghost" >M'envoyer un message</Button>
                            </ScrollLink>
                        </SimpleGrid>
                    </Stack>
                </Stack>
            </FadeInWrapper>
        </Container>
    )
}

export default WelcomeSection