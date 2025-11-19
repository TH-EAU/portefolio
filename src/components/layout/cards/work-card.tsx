import type Work from "@/models/work"
import { Box, Button, Card, Dialog, Heading, HStack, Image, Portal, Separator, Stack, Text, Link as ChakraLink } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router"

export const WorkCard: React.FC<{ work: Work }> = ({ work }) => {
    return (
        <Card.Root size="md" rounded="2xl" overflow="hidden" >
            <Card.Header p={0} position="relative" >
                <Box position="absolute" h={120} w="full" overflow="hidden">
                    <Image position="absolute" src={work.caption} w="full" />
                </Box>

                <Heading p={5} blendMode="difference" zIndex={2}>{work.name}</Heading>
                <Box h={100} zIndex={4} bgGradient="to-b" gradientFrom="transparent" gradientTo="#111111"></Box>
            </Card.Header>

            <Card.Body>
                <Heading fontSize="md">Description</Heading>
                <Text>{work.overview}</Text>
            </Card.Body>
            <Card.Footer>
                <Link to={work.slug} ><Button variant="subtle">
                    Voir le projet
                </Button></Link>
            </Card.Footer>

        </Card.Root>
    )
}

const WorkCaptionCard: React.FC<{ work: Work }> = ({ work }) => {
    return (

        <Stack gap={4}>
            <Link to={work.slug} >
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
            </Link>
        </Stack>

    )
}

export default WorkCaptionCard;