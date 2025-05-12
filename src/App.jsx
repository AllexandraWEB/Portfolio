import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import LightFooter from './sections/LightFooter'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ShowcaseSection />
            <Footer />
          </>
        } />
        <Route path="/experience" element={
          <>
          <Experience />
          <LightFooter />
          </>
          } />
      </Routes>
    </Router>
  )
}

export default App