import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Statistics from './components/Statistics'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './components/components.css'

function App() {
  return (
    <div className="app dark">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Statistics />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App