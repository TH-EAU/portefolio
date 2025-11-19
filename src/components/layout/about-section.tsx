import { Box, Container, Grid, GridItem, Heading, HStack, Image, Stack, Tag, Text, Link as ChakraLink, Timeline } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
import { LiaProjectDiagramSolid } from "react-icons/lia"
import { MdSchool } from "react-icons/md"
import { RiCodeView } from "react-icons/ri"
import { Link } from "react-router"

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
                        columns={{ base: 1, md: 2 }}>
                        <Image rounded="2xl" src="/profile.jpeg" w={250} align="right" />
                        <Stack gap={4} mb={10}>
                            <HStack align="end">
                                <Heading fontSize={{ base: "3xl", md: "5xl" }}>About me</Heading>
                                <Box backgroundColor="orange.fg" w={3} h={3} rounded="full" />
                            </HStack>
                            <Text>
                                Parcourez mes projets et réalisations
                            </Text>
                            <HStack color="gray.400" >
                                <ChakraLink as="span" fontSize="md" color="orange.fg" >
                                    <Link target="_blank" to="/documents/output.pdf">
                                        View my CV
                                    </Link>
                                </ChakraLink>
                                <FiArrowUpRight />
                            </HStack>
                        </Stack>
                    </Stack>
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        gapY={10}
                        gapX={2}
                        alignItems="start">
                        <GridItem colSpan={2}><Heading lineHeight={2} textAlign="left" as="h2" fontSize="sm"  >Bio</Heading></GridItem>
                        <GridItem colSpan={10} >
                            <Stack>
                                <Text color="gray.400" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                                <HStack maxW={300} wrap="wrap" >
                                    <Tag.Root rounded="full" >
                                        <Tag.Label>SQL</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.Label>TS</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.Label>C#</Tag.Label>
                                    </Tag.Root>
                                    <Tag.Root>
                                        <Tag.StartElement><FaReact /></Tag.StartElement>
                                        <Tag.Label>React</Tag.Label>
                                    </Tag.Root>
                                </HStack>
                            </Stack>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Heading as="h2" fontSize="sm" lineHeight={1.4}>Parcours</Heading></GridItem>
                        <GridItem colSpan={10}>
                            <Timeline.Root variant="subtle" >
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/esiea.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <MdSchool />
                                            Enseignant en informatique
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            Déveopper des truc oo
                                        </Timeline.Description>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/lpl.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <RiCodeView />
                                            Développeur Front-end
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            Déveopper des truc oo
                                        </Timeline.Description>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/power.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <RiCodeView />
                                            Analyste développeur
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            Déveopper des truc oo
                                        </Timeline.Description>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Connector>
                                        <Timeline.Separator />
                                        <Timeline.Indicator>
                                            <Image src="/psl.png" />
                                        </Timeline.Indicator>
                                    </Timeline.Connector>
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <LiaProjectDiagramSolid />
                                            Responsable informatique
                                        </Timeline.Title>
                                        <Timeline.Description>
                                            Gérer des trucs
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