import { Box, Button, Center, HStack, IconButton, Image } from "@chakra-ui/react"
import { LuGithub, LuLinkedin, } from "react-icons/lu"
import { Link as ScrollLink } from "react-scroll"

const Navbar: React.FC<{ essential?: boolean }> = ({ essential }) => {



    return (
        <HStack zIndex={2} position="fixed" top={0} left={0} w="full" p={4} justify="space-between">
            <HStack>
                <Box
                    rounded="full"
                    backgroundColor={{ base: "#FFFA", _dark: "#1115" }}
                    backdropFilter="blur(10px)"
                    border="1px solid #2225"
                    p={2}
                    cursor="pointer" >
                    <ScrollLink to="home" duration={500} offset={-80} smooth>
                        <Image mixBlendMode="difference" w={{ base: 5, md: 10 }} src="/portfolio/tn_white.png" />
                    </ScrollLink>
                </Box>
                <Box opacity={0}>invisible</Box>
            </HStack>
            <HStack

                display={essential ? "none" : "block"}
                rounded="full"
                backgroundColor={{ base: "#FFFA", _dark: "#1115" }}
                backdropFilter="blur(10px)"
                border="1px solid #2225"
                p={3}
                hideBelow="md">
                <ScrollLink to="work" duration={500} offset={-80} smooth>
                    <Button position="relative" rounded="full" variant="ghost">Projets</Button>
                </ScrollLink>
                <ScrollLink to="about" duration={500} offset={-80} smooth>
                    <Button rounded="full" variant="ghost">A propos</Button>
                </ScrollLink>
                <ScrollLink to="contact" duration={500} offset={-80} smooth>
                    <Button rounded="full" variant="ghost">Contact</Button>
                </ScrollLink>
            </HStack>
            <HStack
                display={essential ? "none" : "block"}
                backgroundColor={{ base: "#FFFA", _dark: "#1115" }}
                backdropFilter="blur(10px)"
                p={3}
                rounded="full"
                overflow="hidden"
                border="1px solid #2225"
                hideBelow="md">
                <IconButton rounded="full" variant="ghost"><a target="_blank" href="https://www.linkedin.com/in/th%C3%A9au-nicolas/" ><LuLinkedin /></a></IconButton>
                <IconButton rounded="full" variant="ghost"><a target="_blank" href="https://github.com/TH-EAU" ><LuGithub /></a></IconButton>
            </HStack>

            <IconButton
                hideFrom="md"
                rounded="full"
                overflow="hidden"
                border="1px solid #2225"
                variant="ghost"
                backgroundColor="#1115"
                backdropFilter="blur(10px)"
                p={2}>
                <a target="_blank" href="https://www.linkedin.com/in/th%C3%A9au-nicolas/" ><LuLinkedin /></a>
            </IconButton>

            <Box position="absolute" bottom="-85vh" hideFrom="md" w="full" left={0}>
                <Center>

                    <HStack rounded="full"
                        backgroundColor={{ base: "#FFFA", _dark: "#1115" }}
                        backdropFilter="blur(10px)"
                        border="1px solid #2225"
                        p={1}
                        justify="space-between"
                    >
                        <ScrollLink to="work" duration={500} offset={-80} smooth>
                            <Button rounded="full" variant="ghost" >Work</Button>
                        </ScrollLink>
                        <ScrollLink to="about" duration={500} offset={-80} smooth>
                            <Button rounded="full" variant="ghost" >About</Button>
                        </ScrollLink>
                        <ScrollLink to="contact" duration={500} offset={-80} smooth>
                            <Button rounded="full" variant="ghost">Contact</Button>
                        </ScrollLink>
                    </HStack>
                </Center>
            </Box>
        </HStack>
    )
}

export default Navbar

