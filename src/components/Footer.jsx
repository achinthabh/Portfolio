import './components.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Achintha Bhanuka</h3>
            
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="link-group">
              <h4>Resources</h4>
              <a href="https://github.com/achinthabh" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" onClick={(e) => {
                e.preventDefault()
                window.print()
              }}>Print Resume</a>
              <a href="#contact">Hire Me</a>
            </div>
            
            <div className="link-group">
              <h4>Technologies</h4>
              <span>AWS</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>Terraform</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Achintha Bhanuka. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer