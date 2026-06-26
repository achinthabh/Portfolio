import './components.css'
import GlitchText from './GlitchText'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadCV = () => {
    const cvUrl = '/achinthabhanuka.pdf'
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
            }}>🔐 Cybersecurity & Pentesting</span>
            <span className="badge" style={{
              borderColor: 'rgba(0, 212, 255, 0.5)',
              background: 'rgba(0, 212, 255, 0.1)',
              color: '#00d4ff'
            }}>⚙️ Cloud & DevOps</span>
          </div>

          <div className="hero-tagline">
            <h2><GlitchText text="Cybersecurity Student" intensity="medium" /></h2>
            <h3 style={{ color: '#ff006e', textShadow: '0 0 12px rgba(255, 0, 110, 0.6)' }}>
              Penetration Testing · Network Security · Ethical Hacking
            </h3>
          </div>

          <p className="hero-description" style={{ color: 'var(--text-secondary)' }}>
            Computer Networks student actively pursuing a cybersecurity career. I build real security tools — from AI-powered vulnerability scanners to phishing detectors — and hold multiple industry certifications from Cisco and Fortinet. Currently seeking cybersecurity internship opportunities.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              style={{ background: 'linear-gradient(135deg, #ff006e, #8b5cf6)' }}
            >
              <i className="fas fa-shield-alt"></i> View Security Projects
            </button>

            <button
              className="btn btn-secondary"
              onClick={handleDownloadCV}
            >
              <i className="fas fa-download"></i> Download CV
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3 style={{ color: '#ff006e' }}>3+</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Security Tools Built</p>
            </div>
            <div className="stat">
              <h3 style={{ color: '#ff006e' }}>10+</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Certifications Earned</p>
            </div>
            <div className="stat">
              <h3 style={{ color: '#ff006e' }}>10+</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Projects Built</p>
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
              <span className="terminal-title">bash — kali@pentester-lab</span>
            </div>
            <div className="terminal-body">
              <p><span className="terminal-prompt">$</span> whoami</p>
              <p style={{ color: '#ff006e' }}>achintha-bhanuka | cybersecurity-student</p>
              <br/>
              <p><span className="terminal-prompt">$</span> cat skills.txt</p>
              <p style={{ color: '#ff006e' }}># 🔐 Security Arsenal</p>
              <p style={{ color: '#00d4ff' }}>- AI Web Vulnerability Scanner (SQLi + XSS)</p>
              <p style={{ color: '#00d4ff' }}>- Phishing URL & Email Detection</p>
              <p style={{ color: '#00d4ff' }}>- Password Security & Hash Analysis</p>
              <p style={{ color: '#00d4ff' }}>- Network Reconnaissance (Nmap, Wireshark)</p>
              <br/>
              <p style={{ color: '#ff006e' }}># ⚙️ DevOps Stack</p>
              <p>• Docker · Kubernetes · Terraform · AWS</p>
              <p>• CI/CD Pipelines · GitHub Actions</p>
              <br/>
              <p><span className="terminal-prompt">$</span> nmap -sV --open target.com</p>
              <p style={{ color: '#00d4ff' }}>Scanning... found 3 open ports ✓</p>
              <p><span className="blinking-cursor">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero