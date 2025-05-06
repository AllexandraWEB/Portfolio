import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'

const App = () => {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <HeroSection />
      {/* <Experience /> */}
      <ShowcaseSection />
      <Footer />
    </>
  )
}

export default App
