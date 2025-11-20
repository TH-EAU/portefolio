import { Heading, HStack, Image } from "@chakra-ui/react"

const Header = () => {
    return (
        <HStack justify="start" >
            <Image src="/portefolio/tn.png" />
            <Heading>Théau NICOLAS</Heading>
        </HStack>
    )
}

export default Header