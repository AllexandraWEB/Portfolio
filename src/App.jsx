import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import LightFooter from './sections/LightFooter'
import Preloader from './components/Preloader' 
import AboutMe from './sections/AboutMe'
import Cursor from './components/Cursor'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <Preloader onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <Router>
          <Cursor />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutMe />
                  <ShowcaseSection />
                  <Footer />
                </>
              }
            />
            <Route
              path="/experience"
              element={
                <>
                  <Experience />
                  <LightFooter />
                </>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App