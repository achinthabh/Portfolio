import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './components/components.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Skills />
        <Statistics />
        <Projects />
        <Experience />
        <Blog />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App