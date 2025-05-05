import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <ShowcaseSection />
      <Footer />
    </>
  )
}

export default App
