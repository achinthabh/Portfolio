import './components.css'
import GlitchText from './GlitchText'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/achinthabhanuka.pdf'
    
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Achintha_Bhanuka_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge" style={{ 
              borderColor: 'rgba(255, 0, 110, 0.5)',
              background: 'rgba(255, 0, 110, 0.1)',
              color: '#ff006e'
            }}>🔐 Cybersecurity & Penetration Testing</span>
            <span className="badge" style={{
              borderColor: 'rgba(0, 212, 255, 0.5)',
              background: 'rgba(0, 212, 255, 0.1)',
              color: '#00d4ff'
            }}>📡 Network Security Specialist</span>
          </div>

          <div className="hero-tagline">
            <h2><GlitchText text="Ethical Hacker | Pentester" intensity="medium" /></h2>
            <h3 style={{ color: '#ff006e', textShadow: '0 0 10px rgba(255, 0, 110, 0.6)' }}>
              Finding vulnerabilities. Securing systems. Building the future of cybersecurity.
            </h3>
          </div>
          
          <p className="hero-description" style={{ color: '#00d4ff' }}>
            Specialized in penetration testing, ethical hacking, and network security. I discover security flaws before the bad guys do, helping organizations fortify their digital infrastructure. My arsenal includes advanced reconnaissance, exploitation techniques, and comprehensive security assessments.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              <i className="fas fa-crosshairs"></i> Security Assessments
            </button>
            
            <button 
              className="btn btn-secondary"
              onClick={handleDownloadCV}
            >
              <i className="fas fa-download"></i> Download My CV
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <h3 style={{ color: '#ff006e' }}>50+</h3>
              <p style={{ color: '#00d4ff' }}>Vulnerabilities Found</p>
            </div>
            <div className="stat">
              <h3 style={{ color: '#ff006e' }}>200+</h3>
              <p style={{ color: '#00d4ff' }}>Security Assessments</p>
            </div>
            <div className="stat">
              <h3 style={{ color: '#ff006e' }}>24/7</h3>
              <p style={{ color: '#00d4ff' }}>Always Learning & Testing</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="learning-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">bash — student@devops-learning</span>
            </div>
            <div className="terminal-body">
              <p><span className="terminal-prompt">$</span> whoami</p>
              <p style={{ color: '#00d4ff' }}>ethical-hacker@pentester-lab</p>
              <br/>
              <p><span className="terminal-prompt">$</span> cat security_expertise.txt</p>
              <p style={{ color: '#ff006e' }}># Security Arsenal</p>
              <p style={{ color: '#00d4ff' }}>- Penetration Testing (OWASP Top 10)</p>
              <p style={{ color: '#00d4ff' }}>- Network Reconnaissance & Scanning</p>
              <p style={{ color: '#00d4ff' }}>- Vulnerability Assessment & Exploitation</p>
              <p style={{ color: '#00d4ff' }}>- Web Application Security Testing</p>
              <br/>
              <p>• Network & System Administration</p>
              <p>• Security Hardening & Best Practices</p>
              <p>• Cryptography & Encryption Protocols</p>
              <p>• Red & Blue Team Tactics</p>
              <br/>
              <p><span className="terminal-prompt">$</span> stat --format="%n: %s bytes" security_assessments</p>
              <p style={{ color: '#00d4ff' }}>security_assessments.log: SUCCESS ✓</p>
              <p><span className="blinking-cursor">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero