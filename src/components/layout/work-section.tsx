import workList from "@/assets/works-list"
import { Box, Container, Heading, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import WorkCaptionCard from "./cards/work-card"
import { ColorModeProvider } from "../ui/color-mode"


const WorkSection = () => {
    const columnCount = useBreakpointValue({ base: 1, sm: 2, md: 3 })
    return (
        <ColorModeProvider forcedTheme="dark">

            <Box as="section" py={{ base: 12, md: 56 }} >
                <Container maxW="5xl" >

                    <Stack id="work" gap={4} mt={18} mb={10}>
                        <HStack align="end">
                            <Heading fontSize={{ base: "3xl", md: "5xl" }} >Work</Heading>
                            <Box backgroundColor="orange.fg" w={3} h={3} rounded="full" />
                        </HStack>
                        <Text>
                            Parcourez mes projets et réalisations
                        </Text>
                    </Stack>

                    <Box
                        style={{
                            columnCount: columnCount,
                            columnGap: "32px",
                        }}
                    >
                        {workList.map(w => <Box
                            key={w.name}
                            breakInside="avoid"
                            mb="32px"
                        > <WorkCaptionCard work={w} /></Box>)}
                    </Box>
                </Container>
            </Box>
        </ColorModeProvider>
    )
}

export default WorkSection
