import { useState, useEffect } from 'react'
import './components.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const scrolled = (scrollTop / docHeight) * 100
      setScrollProgress(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true"></div>
      
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container nav-container">
          <div 
            className="nav-logo" 
            onClick={() => scrollToSection('home')}
            role="button"
            tabIndex="0"
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('home')}
            aria-label="Home"
          >
            <span className="logo-text">Achintha Bhanuka</span>
            <span className="logo-subtitle">Cloud & DevOps</span>
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} role="group">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <a
              href="https://github.com/achinthabh"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              aria-label="GitHub Profile - Opens in new window"
              title="Visit GitHub"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={`${mobileMenuOpen ? 'Close' : 'Open'} navigation menu`}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar