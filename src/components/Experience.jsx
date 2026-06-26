import './components.css'

const Experience = () => {
  const experiences = [
    {
      role: 'Cybersecurity Self-Study & Tool Development',
      company: 'Personal Projects',
      period: '2024 - Present',
      type: 'cyber',
      description: 'Actively learning offensive and defensive cybersecurity by building real security tools including an AI-powered web vulnerability scanner, a password security toolkit, and a phishing detection system.',
      technologies: ['Python', 'Kali Linux', 'Nmap', 'Burp Suite', 'OWASP', 'Metasploit'],
      achievements: [
        'Built AI Web Vulnerability Scanner detecting SQLi and XSS using ML classification',
        'Developed Password Security Toolkit with dictionary attack simulation',
        'Created full-stack Phishing Email & URL Checker with Node.js REST API',
        'Earned Fortinet Certified Fundamentals Cybersecurity certification'
      ]
    },
    {
      role: 'BSc Computer Networks Student',
      company: 'NSBM Green University',
      period: '2024 - Present',
      type: 'edu',
      description: 'Pursuing a degree in Computer Networks with core modules in network security, system administration, and cloud infrastructure. Applying theoretical knowledge through hands-on lab projects.',
      technologies: ['Networking', 'Cybersecurity', 'Cloud Computing', 'System Administration', 'Linux'],
      achievements: [
        'Studied TCP/IP networking, routing protocols, and network security fundamentals',
        'Completed 7+ industry certifications from Cisco, Fortinet, and Linux Foundation',
        'Collaborated on team software projects (Tourist Web App, Warehouse Management System)',
        'Applied DevOps concepts including Docker, CI/CD, and Terraform in academic projects'
      ]
    },
    {
      role: 'Development Committee Member – Computer Society',
      company: 'IEEE Computer Society Student Branch Chapter of NSBM · Part-time',
      period: 'Feb 2026 - Present',
      type: 'vol',
      description: 'Serving as a Development Committee Member within the Computer Society chapter, contributing to software development, technical initiatives, and workshop organization for the student branch.',
      technologies: ['Software Development', 'Technical Event Planning', 'Team Collaboration', 'Community Growth'],
      achievements: [
        'Organizing and facilitating technical events and computing skill-sharing workshops',
        'Collaborating on software developments and coding sessions initiated by the Computer Society',
        'Representing the chapter in local hackathons and community outreach programs',
        'Networking with computing professionals and academic leads to align chapter activities'
      ]
    },
    {
      role: 'E-Commerce & Dropshipping Entrepreneur',
      company: 'Freelance Business',
      period: '2017 - Present',
      type: 'biz',
      description: 'Managing online stores, supplier coordination, and digital marketing for multiple e-commerce ventures. Developed strong skills in business operations and digital strategy.',
      technologies: ['E-commerce Platforms', 'Digital Marketing', 'Supplier Management', 'Analytics'],
      achievements: [
        'Managed multiple successful online stores generating consistent revenue',
        'Built and optimized supplier networks and order fulfillment processes',
        'Implemented data-driven digital marketing strategies to drive traffic and conversions'
      ]
    }
  ]

  const typeColors = {
    cyber: { border: 'rgba(255,0,110,0.4)', bg: 'rgba(255,0,110,0.08)', label: '#ff6e9e', icon: '🔐' },
    edu:   { border: 'rgba(0,212,255,0.4)', bg: 'rgba(0,212,255,0.08)', label: '#00d4ff', icon: '🎓' },
    vol:   { border: 'rgba(139,92,246,0.4)', bg: 'rgba(139,92,246,0.08)', label: '#a78bfa', icon: '⚡' },
    dev:   { border: 'rgba(59,130,246,0.4)', bg: 'rgba(59,130,246,0.08)', label: '#60a5fa', icon: '💻' },
    biz:   { border: 'rgba(16,185,129,0.4)', bg: 'rgba(16,185,129,0.08)', label: '#34d399', icon: '💼' }
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience & Education</h2>
          <p>My journey in cybersecurity, software development, and entrepreneurship</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline">
            {experiences.map((exp, idx) => {
              const colors = typeColors[exp.type]
              return (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker" style={{ background: colors.label }}></div>
                  <div className="timeline-content" style={{ borderLeft: `3px solid ${colors.border}`, paddingLeft: '1.5rem' }}>
                    <div className="timeline-header">
                      <h3>{colors.icon} {exp.role}</h3>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <p className="timeline-description">{exp.description}</p>

                    <div className="timeline-tech">
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-badge" style={{
                          borderColor: colors.border,
                          color: colors.label,
                          background: colors.bg
                        }}>{tech}</span>
                      ))}
                    </div>

                    <ul className="achievements">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>
                          <i className="fas fa-chevron-right" style={{ color: colors.label }}></i> {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience