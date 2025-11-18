import { Box, Button, CloseButton, Container, Drawer, HStack, IconButton, Image, Portal, Stack, type DrawerOpenChangeDetails } from "@chakra-ui/react"
import { useState } from "react"
import { LuGithub, LuLinkedin, LuWaves } from "react-icons/lu"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpenMobileMenu = (e: DrawerOpenChangeDetails) => {
        setOpen(e.open)
    }

    return (

        <HStack zIndex={2} position="fixed" top={0} left={0} p={4} justify="space-between">
            <HStack>
                <Box
                    rounded="full"
                    backgroundColor="#1115"
                    backdropFilter="blur(10px)"
                    border="1px solid #2225"
                    p={2} >
                    <Image mixBlendMode="luminosity" w={{ base: 5, md: 10 }} src="/tn.png" />
                </Box>
                <Box opacity={1}>invisible</Box>
            </HStack>
            <HStack
                rounded="full"
                backgroundColor="#1115"
                backdropFilter="blur(10px)"
                border="1px solid #2225"
                p={3}
                hideBelow="md">
                <Button rounded="full" variant="ghost">Work</Button>
                <Button rounded="full" variant="ghost">About</Button>
                <Button rounded="full" variant="ghost">Contact</Button>
            </HStack>
            <HStack
                backgroundColor="#1115"
                backdropFilter="blur(10px)"
                p={3}
                rounded="full"
                overflow="hidden"
                border="1px solid #2225"
                hideBelow="md">
                <IconButton rounded="full" variant="ghost"><LuLinkedin /></IconButton>
                <IconButton rounded="full" variant="ghost"><LuGithub /></IconButton>
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
                                    <Image mixBlendMode="luminosity" w={{ base: 5, md: 10 }} src="/tn.png" />
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
            <Button rounded="full" variant="ghost">Work</Button>
            <Button rounded="full" variant="ghost">About</Button>
            <Button rounded="full" variant="ghost">Contact</Button>
        </Stack>
    )
}