import type Work from "@/models/work"
import { Box, HStack, Image, Portal, Stack, Text, Link as ChakraLink, Drawer } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi"

export const WorkCard: React.FC<{ work: Work }> = ({ work }) => {
    return (
        <Stack gap={4}>
            <Box
                overflow="hidden"
                borderRadius="xl"
                position="relative"
                cursor="pointer"
                transition="ease .5s"
                _hover={{
                    transform: "scale(1.02)"
                }}
            >
                <Image
                    src={work.caption}
                    alt={work.name}
                    objectFit="cover"
                    w="full"
                    h="full"
                />
            </Box>

            <Stack gap={1}>
                <HStack>
                    <ChakraLink as="span" fontSize="md" >{work.name}</ChakraLink>
                    <FiArrowUpRight />
                </HStack>
                <Text fontSize="xs" textTransform="uppercase" color="gray.400">
                    Description
                </Text>
            </Stack>
        </Stack>
    )
}

const WorkCaptionCard: React.FC<{ work: Work }> = ({ work }) => {
    return (
        <Drawer.Root size="xl">
            <Drawer.Trigger asChild>
                <Box>
                    <WorkCard work={work} />
                </Box>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <work.page />
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

export default WorkCaptionCard;