import { Heading, HStack, Center, Avatar, Box, Stack } from "@chakra-ui/react"
import ShaderCanvas from "../ui/shader-canvas"
import FadeInWrapper from "../ui/fade_in_wrapper"
import { Link as ScrollLink } from "react-scroll"

const HeroSection = () => {
    return (
        <>
            <Box
                id="home"
                top={0}
                left={0}
                position="absolute"
                zIndex={-2}
                p={4}
                rounded={0}
                w="full"
                h="92vh"
                overflow="hidden"
                backgroundColor="#09090b"
                color="white"
                opacity={.7}
            >
                <ShaderCanvas />
            </Box>


            <Stack pt={32} h="90vh"
                px={{ base: 4, md: 32, lg: 48 }}
                py={0}
                backdropFilter="saturate(2)"
            >
                <HStack py={{ base: 24, md: 24, xl: 24 }} mt={{ base: 5, md: 20 }} borderLeft={{ base: "none", md: "1px solid #FFF2" }} >
                    <Stack borderTop="1 px solid" borderColor="#FFF2" >
                        <Center pb={4} cursor="pointer" >
                            <ScrollLink to="welcome" duration={500} offset={-80} smooth>
                                <HStack>
                                    <Avatar.Root size="xl">
                                        <Avatar.Image src="/portfolio/profile.png" />
                                        <Avatar.Fallback name="Théau Nicolas" />
                                    </Avatar.Root>
                                    <Heading fontSize="xl" color="white" fontWeight="light">Théau Nicolas</Heading>
                                </HStack>
                            </ScrollLink>
                        </Center>
                        <FadeInWrapper>
                            <Heading
                                as="h1"
                                color="white"
                                fontSize={{ base: "5xl", md: "7xl", xl: "8xl" }}
                                fontWeight="normal"
                                letterSpacing={-3}
                                lineHeight={1.2}
                                textAlign={{ base: "center", md: "left" }}
                            >La rencontre de la logique et de la créativité créé l’impact </Heading>

                        </FadeInWrapper>
                        <Box
                            borderLeft="3px solid"
                            borderColor="orange.fg"
                            backgroundImage="repeating-linear-gradient(
                            45deg,
                            white -4px,
                            white 2px,
                            transparent 1px,
                            transparent 20px
                            );"
                            backgroundSize="10px 10px"
                            backdropFilter="hue-rotate(350deg)"
                            h={70}
                            w="full"
                            backgroundPosition='5px 5px'
                            opacity={.5}
                        />

                    </Stack>
                    <Stack hideBelow="md" justify="end" h="full" w="20%" borderLeft="1px solid" borderColor="#FFF2">
                        <Box
                            w="full"
                            h={100}
                            backdropFilter="saturate(2) contrast(1.1) brightness(1.2)"
                        />
                    </Stack>
                </HStack>

                {/* <HStack position="absolute" w="full" h="90vh" top={0} gap={0}>
                    <Stack bgGradient="to-r" gap={24} gradientFrom="#2225" gradientTo="#2220" justify={{ base: "space-between", md: "end" }} h="full" w="60%" borderLeft="1px solid" borderColor="#FFF2">
                        <Center pb={4}>
                            <HStack>
                                <Avatar.Root size="xl">
                                    <Avatar.Image src="/portfolio/profile.jpeg" />
                                    <Avatar.Fallback name="Théau Nicolas" />
                                </Avatar.Root>
                                <Heading fontSize="xl" color="white" fontWeight="light">Théau Nicolas</Heading>
                            </HStack>
                        </Center>
                        <Box
                            borderLeft="3px solid"
                            borderColor="orange.fg"
                            backgroundImage="repeating-linear-gradient(
                            45deg,
                            white -4px,
                            white 2px,
                            transparent 1px,
                            transparent 20px
                            );"
                            backgroundSize="10px 10px"
                            backdropFilter="hue-rotate(350deg)"
                            h={100}
                            w="full"
                            backgroundPosition='5px 5px'
                        />
                    </Stack>
                    <Stack justify="end" h="full" w="20%" borderLeft="1px solid" borderColor="#FFF2">
                        <Box
                            w="full"
                            h={100}
                            backdropFilter="saturate(2) contrast(1.1) brightness(1.2)"
                        />
                    </Stack>
                </HStack> */}


            </Stack >


        </>
    )
}

export default HeroSection