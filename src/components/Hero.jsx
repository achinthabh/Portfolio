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
    const cvUrl = '/documents/Achintha_Bhanuka_CV.pdf'
    
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
            <span className="badge student">🎓 Computer Networks Undergraduate</span>
          </div>

          <div className="hero-tagline">
            <h2>Cloud | Network | DevOps Foundations</h2>
            <h3>One Step at a Time</h3>
          </div>
          
          <p className="hero-description">
            As a Computer Networks student, I'm developing hands-on skills in cloud architecture, network security, and DevOps practices. My learning path includes AWS fundamentals, infrastructure as code, and building resilient, secure systems.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              <i className="fas fa-project-diagram"></i> View Learning Projects
            </button>
            
            {/* UPDATED BUTTON - Changed to Download CV */}
            <button 
              className="btn btn-secondary"
              onClick={handleDownloadCV}
            >
              <i className="fas fa-download"></i> Download My CV
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Learning Projects</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Hours of Practice</p>
            </div>
            <div className="stat">
              <h3>Daily</h3>
              <p>Code & Learn</p>
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
              <p>achintha@undergraduate-devops-learner</p>
              <br/>
              <p><span className="terminal-prompt">$</span> cat current_focus.txt</p>
              <p>• Docker & Containerization</p>
              <p>• Infrastructure as Code (Terraform)</p>
              <p>• AWS Cloud Fundamentals</p>
              <p>• CI/CD Pipeline Basics</p>
              <br/>
              <p><span className="terminal-prompt">$</span> find ./projects -type f -name "*.md"</p>
              <p>./projects/learning_journal.md</p>
              <p>./projects/docker_setup_guide.md</p>
              <p><span className="blinking-cursor">_</span></p>
            </div>
          </div>
          
          <div className="student-motivation">
            <div className="motivation-card">
              <p>
                "My goal is to secure a <strong>DevOps internship</strong> where I can 
                contribute while accelerating my learning under experienced mentors."
              </p>
              <div className="motivation-author">- Achintha Bhanuka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero