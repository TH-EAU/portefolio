import Navbar from "@/components/layout/navbar"
import HeroSection from "./components/layout/hero-section"
import { Container, Text } from "@chakra-ui/react"
import WorkSection from "./components/layout/work-section"
import FadeInWrapper from "./components/ui/fade_in_wrapper"
import AboutSection from "./components/layout/about-section"


function App() {
  const today = new Date()
  return (
    <>

      <Navbar />
      <HeroSection />
      <Container>
        <FadeInWrapper>
          <WorkSection />
        </FadeInWrapper>
      </Container>
      <FadeInWrapper>
        <AboutSection />
      </FadeInWrapper>
      <Text pt={24} textAlign="center">
        Copyright © {today.getFullYear()} Théau Nicolas. All rights reserved.
      </Text>

    </>
  )
}

export default App
