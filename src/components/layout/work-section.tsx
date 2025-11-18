import workList from "@/assets/works-list"
import { Box, Heading, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import WorkCaptionCard from "./cards/work-card"


const WorkSection = () => {
    const columnCount = useBreakpointValue({ base: 1, sm: 2, md: 3 })
    return (
        <Box id="work" as="section" py={{ base: 12, md: 20 }}>
            <Stack gap={4} mt={18} mb={10}>
                <Heading fontSize={{ base: "3xl", md: "5xl" }}>Work</Heading>
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
        </Box>
    )
}

export default WorkSection
