import { Heading, HStack, Container, Center, Avatar, Box } from "@chakra-ui/react"
import ShaderCanvas from "../ui/shader-canvas"
import FadeInWrapper from "../ui/fade_in_wrapper"

const HeroSection = () => {
    return (
        <>
            <Box top={0} left={0} position="absolute" zIndex={-2} p={4} rounded={0} w="full" h={620} overflow="hidden">
                <ShaderCanvas />
            </Box>
            <Box pt={32} textAlign="center" >
                <FadeInWrapper>
                    <Center pb={4}>
                        <HStack>
                            <Avatar.Root>
                                <Avatar.Image src="/profile.jpeg" />
                                <Avatar.Fallback name="Théau Nicolas" />
                            </Avatar.Root>
                            <Heading fontSize="lg">Théau Nicolas</Heading>
                        </HStack>
                    </Center>
                    <Heading fontSize={{ base: "5xl", md: "7xl" }} fontWeight="normal" letterSpacing={-3} lineHeight={1} >A designer passionate about creating beautiful user friendly products</Heading>
                </FadeInWrapper>
            </Box>

        </>
    )
}

export default HeroSection