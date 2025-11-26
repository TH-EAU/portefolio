import { Box, Container, Grid, GridItem, Heading, HStack, Image, Stack, Tag, Text, Link as ChakraLink, Timeline } from "@chakra-ui/react"
import { FaJira, FaReact } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
import { LiaProjectDiagramSolid } from "react-icons/lia"
import { MdSchool } from "react-icons/md"
import { RiCodeView, RiNextjsFill } from "react-icons/ri"
import { TbBrandAdonisJs, TbBrandThreejs } from "react-icons/tb"

const AboutSection = () => {
    return (
        <Box
            as="section"
            py={{ base: 12, md: 20 }}
            border="1px solid #2225"
            bgGradient="to-b"
            gradientFrom="rgba(59, 47, 39, 0.33)"
            gradientTo="#1115"
            rounded="3xl"
            mx={4}>
            <Container maxW="5xl">
                <Stack id="about" >
                    <Stack
                        flexDir={{ base: "column", md: "row" }}
                        gap={10}
                        mb={5}
                        alignItems={{ base: "start", md: "end" }}
                        columns={{ base: 1, md: 2 }}
                        wrap={{ base: "wrap-reverse", md: "wrap" }}>

                        <Stack gap={4} mb={10}>
                            <HStack align="center">
                                <Heading fontSize={{ base: "3xl", md: "5xl" }}>A propos</Heading>
                                <Box backgroundColor="orange.fg" w={3} h={3} rounded="full" />
                            </HStack>
                            <Text>
                                Décrouvrez mon univers
                            </Text>
                            <HStack >
                                <ChakraLink as="span" fontSize="xs" >
                                    <a target="_blank" href="/portfolio/documents/CV_Théau_NICOLAS.pdf">
                                        Voir mon CV
                                    </a>
                                </ChakraLink>
                                <FiArrowUpRight />
                            </HStack>
                        </Stack>
                    </Stack>
                    <Grid
                        templateColumns={{ base: "repeat(10, 1fr)", md: "repeat(12, 1fr)" }}
                        gapY={10}
                        gapX={2}
                        alignItems="start">
                        <GridItem colSpan={2}><Heading lineHeight={2} textAlign="left" as="h2" fontSize="sm"  >Bio</Heading></GridItem>
                        <GridItem colSpan={10} >
                            <Stack fontWeight="light">
                                <Text>Toujours partant pour un challenge ! J’ai travaillé pour diverses entreprises,
                                    entre start‑up, PME et grands groupes. Lors de ma première expérience, j’ai eu
                                    l’opportunité d’accompagner un entrepôt de la grande distribution dans sa transition
                                    numérique, en étant à l’écoute des besoins de l’entreprise et en leur apportant mon
                                    savoir‑faire en qualité de responsable informatique. À partir de là, animé par
                                    le développement, j’ai décidé de devenir développeur, tout en choisissant des postes
                                    qui me permettent de garder un lien avec l’humain.
                                </Text>
                                <Text>
                                    Enfin, je me suis tourné
                                    vers l’enseignement, où j’ai accompagné plus de 200 élèves à devenir de futurs
                                    développeurs, en leur transmettant la passion que j’éprouve pour ce domaine.
                                    J’ai également piloté plus de 30 projets étudiants en tant que chef de projet,
                                    dont je suis fier de pouvoir dire que la plupart sont de belles réussites.</Text>
                                <Text>Je suis persuadé que le lien entre l'humain et le numérique est étroit, et qu'il est important de le conserver.</Text>
                                <Text>En dehors du travail, j'aime faire de la musique, de la boxe anglaise, et un peu de peinture.</Text>

                                <Text my={5} fontSize="sm" fontWeight="lighter"  >Ma stack préférée actuelle : React / React Query - Strapi - PostgreSQL</Text>
                                <HStack maxW={300} wrap="wrap" >
                                    <Tag.Root>
                                        <Tag.Label>SQL</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.Label>Qlik</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.Label>JS/TS</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.Label>C#</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.Label>.NET</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.Label>Entity Framework</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.StartElement><FaReact /></Tag.StartElement>
                                        <Tag.Label>React</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.StartElement><FaReact /></Tag.StartElement>
                                        <Tag.Label>React Query / Tanstack Query</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.StartElement><TbBrandThreejs /></Tag.StartElement>
                                        <Tag.Label>ThreeJS</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.StartElement><RiNextjsFill /></Tag.StartElement>
                                        <Tag.Label>NextJS</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.StartElement><TbBrandAdonisJs /></Tag.StartElement>
                                        <Tag.Label>Adonis</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.StartElement><FaJira /></Tag.StartElement>
                                        <Tag.Label>Jira</Tag.Label>
                                    </Tag.Root>

                                </HStack>
                            </Stack>
                        </GridItem>
                        <GridItem colSpan={{ base: 5, md: 2 }}>
                            <Heading as="h2" fontSize="sm" lineHeight={1.4}>Parcours</Heading></GridItem>
                        <GridItem colSpan={10}>
                            <Timeline.Root variant="subtle" >
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/portfolio/esiea.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <MdSchool />
                                            Enseignant en informatique
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            {/* Déveopper des truc oo */}
                                        </Timeline.Description>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/portfolio/lpl.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <RiCodeView />
                                            Développeur Front-end
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            {/* Déveopper des truc oo */}
                                        </Timeline.Description>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/portfolio/power.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <RiCodeView />
                                            Analyste développeur
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            {/* Déveopper des truc oo */}
                                        </Timeline.Description>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/portfolio/psl.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <LiaProjectDiagramSolid />
                                            Responsable informatique
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            {/* Gérer des trucs */}
                                        </Timeline.Description>
                                    </Timeline.Content>
                                </Timeline.Item>
                            </Timeline.Root>
                        </GridItem>
                    </Grid>
                </Stack>
            </Container>
        </Box >
    )
}

export default AboutSection