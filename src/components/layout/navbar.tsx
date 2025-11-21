import { Box, Button, CloseButton, Drawer, HStack, IconButton, Image, Portal, Stack, type DrawerOpenChangeDetails } from "@chakra-ui/react"
import { useState } from "react"
import { LuGithub, LuLinkedin, LuWaves } from "react-icons/lu"
import { MdDarkMode } from "react-icons/md"
import { Link as ScrollLink } from "react-scroll"

const Navbar: React.FC<{ essential?: boolean }> = ({ essential }) => {
    const [open, setOpen] = useState(false)

    const handleOpenMobileMenu = (e: DrawerOpenChangeDetails) => {
        setOpen(e.open)
    }

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
                        <Image mixBlendMode="difference" w={{ base: 5, md: 10 }} src="/portefolio/tn_white.png" />
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
                    <Button position="relative" rounded="full" variant="ghost">Work</Button>
                </ScrollLink>
                <ScrollLink to="about" duration={500} offset={-80} smooth>
                    <Button rounded="full" variant="ghost">About</Button>
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
            <Drawer.Root size="full" open={open} onOpenChange={handleOpenMobileMenu} >
                <Drawer.Trigger asChild>
                    <IconButton
                        hideFrom="md"
                        rounded="full"
                        overflow="hidden"
                        border="1px solid #2225"
                        variant="ghost"
                        backgroundColor="#1115"
                        backdropFilter="blur(10px)"
                        p={2}>
                        <LuWaves />
                    </IconButton>
                </Drawer.Trigger>
                {/* <Drawer.Backdrop /> */}
                <Portal>
                    <Drawer.Positioner p={3} >

                        <Drawer.Content
                            backgroundColor="rgba(169, 73, 25, 0.6)"
                            backdropFilter="blur(10px)"
                            rounded="3xl"

                        >
                            <Drawer.Header>
                                <Box
                                    rounded="full"
                                    backgroundColor="#1115"
                                    backdropFilter="blur(10px)"
                                    border="1px solid #2225"
                                    p={2} >
                                    <Image mixBlendMode="luminosity" w={{ base: 5, md: 10 }} src="/portefolio/tn.png" />
                                </Box>
                            </Drawer.Header>
                            <Drawer.Body>
                                <MobileNavbar />
                            </Drawer.Body>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </HStack>
    )
}

export default Navbar


const MobileNavbar = () => {
    return (
        <Stack align="start" >
            <ScrollLink to="work" duration={500} offset={-80} smooth>
                <Button rounded="full" variant="ghost">Work</Button>
            </ScrollLink>
            <ScrollLink to="about" duration={500} offset={-80} smooth>
                <Button rounded="full" variant="ghost">About</Button>
            </ScrollLink>
            <ScrollLink to="contact" duration={500} offset={-80} smooth>
                <Button rounded="full" variant="ghost">Contact</Button>
            </ScrollLink>
        </Stack>
    )
}