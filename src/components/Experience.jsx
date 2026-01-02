import './components.css'

const Experience = () => {
  const experiences = [
    {
      role: 'DevOps Engineer',
      company: 'Freelance / Personal Projects',
      period: '2023 - Present',
      description: 'Building and automating cloud infrastructure, implementing CI/CD pipelines, and containerizing applications.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      achievements: [
        'Reduced deployment time by 80% through automation',
        'Implemented infrastructure as code for consistent environments',
        'Set up monitoring and alerting for critical applications'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Previous Role / Education',
      period: '2022 - 2023',
      description: 'Full-stack development with focus on backend APIs and database design.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'REST APIs'],
      achievements: [
        'Developed scalable microservices architecture',
        'Optimized database queries improving performance by 40%',
        'Implemented automated testing suite'
      ]
    }
  ]

  const certifications = [
    { name: 'AWS Certified Cloud Practitioner', status: 'In Progress', issuer: 'AWS' },
    { name: 'Docker & Kubernetes: The Practical Guide', status: 'Completed', issuer: 'Udemy' },
    { name: 'Terraform for Beginners', status: 'Completed', issuer: 'Coursera' },
    { name: 'Git Complete Guide', status: 'Completed', issuer: 'Udemy' }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience & Certifications</h2>
          <p>My professional journey and continuous learning in DevOps</p>
        </div>
        
        <div className="experience-container">
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.role}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  
                  <div className="timeline-tech">
                    {exp.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  <ul className="achievements">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx}>
                        <i className="fas fa-star"></i> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="certifications">
            <h3>Certifications & Learning</h3>
            <div className="certs-grid">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-header">
                    <h4>{cert.name}</h4>
                    <span className={`cert-status ${cert.status.toLowerCase()}`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-progress">
                    <div 
                      className="progress-bar" 
                      style={{ 
                        width: cert.status === 'Completed' ? '100%' : 
                               cert.status === 'In Progress' ? '60%' : '0%' 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="learning-path">
              <h4>Learning Path</h4>
              <div className="path-steps">
                <div className="path-step active">
                  <span className="step-number">1</span>
                  <span className="step-text">Cloud Fundamentals (AWS/GCP)</span>
                </div>
                <div className="path-step active">
                  <span className="step-number">2</span>
                  <span className="step-text">Containerization (Docker)</span>
                </div>
                <div className="path-step active">
                  <span className="step-number">3</span>
                  <span className="step-text">Orchestration (Kubernetes)</span>
                </div>
                <div className="path-step">
                  <span className="step-number">4</span>
                  <span className="step-text">CI/CD Automation</span>
                </div>
                <div className="path-step">
                  <span className="step-number">5</span>
                  <span className="step-text">Infrastructure as Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience