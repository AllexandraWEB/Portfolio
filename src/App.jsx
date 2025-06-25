import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import LightFooter from './sections/LightFooter'
import Preloader from './components/Preloader' 

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <Preloader onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
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