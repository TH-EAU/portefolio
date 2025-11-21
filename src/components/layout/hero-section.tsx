import { Heading, HStack, Center, Avatar, Box, Stack, GridItem, Grid } from "@chakra-ui/react"
import ShaderCanvas from "../ui/shader-canvas"
import FadeInWrapper from "../ui/fade_in_wrapper"

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
            >
                <ShaderCanvas />
            </Box>


            <Stack pt={32} h="90vh"
                px={{ base: 4, md: 32, lg: 48 }}
                py={0}
            >
                <HStack py={{ base: 24, md: 24, xl: 24 }} borderLeft="1px solid" borderColor="#FFF2">
                    <Stack borderTop="1 px solid" borderColor="#FFF2" >
                        <Center pb={4}>
                            <HStack>
                                <Avatar.Root size="xl">
                                    <Avatar.Image src="/portefolio/profile.jpeg" />
                                    <Avatar.Fallback name="Théau Nicolas" />
                                </Avatar.Root>
                                <Heading fontSize="xl" color="white" fontWeight="light">Théau Nicolas</Heading>
                            </HStack>
                        </Center>
                        <FadeInWrapper>
                            <Heading
                                as="h1"
                                color="white"
                                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                                fontWeight="normal"
                                letterSpacing={-3}
                                lineHeight={1.2}
                                textAlign="left"
                            >Quand la logique rencontre la créativité, naît l’impact </Heading>
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
                </HStack>

                {/* <HStack position="absolute" w="full" h="90vh" top={0} gap={0}>
                    <Stack bgGradient="to-r" gap={24} gradientFrom="#2225" gradientTo="#2220" justify={{ base: "space-between", md: "end" }} h="full" w="60%" borderLeft="1px solid" borderColor="#FFF2">
                        <Center pb={4}>
                            <HStack>
                                <Avatar.Root size="xl">
                                    <Avatar.Image src="/portefolio/profile.jpeg" />
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


            </Stack>


        </>
    )
}

export default HeroSection