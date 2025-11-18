import Header from "@/components/layout/Header"
import Navbar from "@/components/layout/Navbar"
import HeroSection from "./components/layout/hero-section"
import { Container } from "@chakra-ui/react"

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <HeroSection />
      </Container>
    </>
  )
}

export default App
