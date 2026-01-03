import './components.css'

const Experience = () => {
  const experiences = [
    {
      role: 'Undergraduate Student',
      company: 'Computer Networks',
      period: '2024 - Present',
      description: 'Pursuing degree in Computer Networks with focus on cloud infrastructure, network security, and DevOps practices.',
      technologies: ['Networking', 'Cloud Computing', 'Cybersecurity', 'System Administration'],
      achievements: [
        'Building foundational knowledge in networking protocols and architectures',
        'Developing hands-on skills through lab projects and coursework',
        'Applying DevOps concepts to academic projects and assignments'
      ]
    },
    {
      role: 'Dropshipping & E-commerce Entrepreneur',
      company: 'Freelance Business',
      period: '2017 - Present',
      description: 'Managing online stores, supplier coordination, and digital marketing campaigns for various e-commerce ventures.',
      technologies: ['E-commerce Platforms', 'Digital Marketing', 'Supplier Management', 'Customer Service'],
      achievements: [
        'Managed multiple successful online stores generating consistent revenue',
        'Developed supplier networks and streamlined order fulfillment processes',
        'Implemented digital marketing strategies to drive traffic and sales'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience & Education</h2>
          <p>My journey combining entrepreneurship, education, and technical development</p>
        </div>
        
        <div className="timeline-wrapper">
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
        </div>
      </div>
    </section>
  )
}

export default Experience