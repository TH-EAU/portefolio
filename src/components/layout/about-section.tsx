import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"

const AboutSection = () => {
    return (
        <Box id="about" as="section" py={{ base: 12, md: 20 }} border="1px solid #2225" backgroundColor="#1115" px={5} mx={5} rounded="3xl">
            <HStack>
                <Image src="/profile.jpeg" w={200} />
                <Stack gap={4} mt={48} mb={10}>
                    <Heading fontSize={{ base: "3xl", md: "5xl" }}>About me</Heading>
                    <Text>
                        Parcourez mes projets et réalisations
                    </Text>
                </Stack>
            </HStack>
        </Box>
    )
}

export default AboutSection