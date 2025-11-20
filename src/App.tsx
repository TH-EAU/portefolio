import Navbar from "@/components/layout/navbar"
import HeroSection from "./components/layout/hero-section"
import WorkSection from "./components/layout/work-section"
import FadeInWrapper from "./components/ui/fade_in_wrapper"
import AboutSection from "./components/layout/about-section"
import ContactSection from "./components/layout/contact-section"
import { Box } from "@chakra-ui/react"


function App() {
  return (
    <Box >
      <Navbar />
      <HeroSection />
      <FadeInWrapper>
        <WorkSection />
      </FadeInWrapper>
      <FadeInWrapper>
        <AboutSection />
      </FadeInWrapper>
      <FadeInWrapper>
        <ContactSection />
      </FadeInWrapper>
    </Box>
  )
}

export default App
