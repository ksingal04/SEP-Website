import FloatingNavbar from '../components/FloatingNavbar'
import HeroSection from '../components/HeroSection'
import iPadScroll from '../components/iPadScroll'
import PresidentLetter from '../components/PresidentLetter'
import AboutSection from '../components/AboutSection'
import InfiniteCarousel from '../components/InfiniteCarousel'
import SplitSection from '../components/SplitSection'
import NationalPlacements from '../components/NationalPlacements'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <FloatingNavbar />
      <HeroSection />
      <iPadScroll />
      <PresidentLetter />
      <AboutSection />
      <InfiniteCarousel />
      <SplitSection />
      <NationalPlacements />
      
      <Footer />
    </div>
  )
}

export default Home
