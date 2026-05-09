import { useState, useEffect } from 'react'
import './components.css'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({})

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 70 },
        { name: 'Azure', level: 65 }
      ]
    },
    {
      title: 'Containerization',
      icon: '🐳',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Docker Compose', level: 85 }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: '🏗️',
      skills: [
        { name: 'Terraform', level: 85 },
        { name: 'AWS CloudFormation', level: 75 },
        { name: 'Ansible', level: 70 }
      ]
    },
    {
      title: 'CI/CD & Automation',
      icon: '⚙️',
      skills: [
        { name: 'GitHub Actions', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'GitLab CI', level: 75 },
        { name: 'Bash Scripting', level: 90 }
      ]
    },
    {
      title: 'Monitoring & Logging',
      icon: '📊',
      skills: [
        { name: 'Prometheus', level: 75 },
        { name: 'Grafana', level: 80 },
        { name: 'ELK Stack', level: 70 },
        { name: 'CloudWatch', level: 85 }
      ]
    },
    {
      title: 'Programming',
      icon: '💻',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'YAML', level: 90 },
        { name: 'Linux/Shell', level: 95 }
      ]
    }
  ]

  // Trigger animations on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillId = entry.target.getAttribute('data-skill-id')
          setAnimatedSkills(prev => ({ ...prev, [skillId]: true }))
        }
      })
    }, observerOptions)

    const skillBars = document.querySelectorAll('[data-skill-id]')
    skillBars.forEach(bar => observer.observe(bar))

    return () => skillBars.forEach(bar => observer.unobserve(bar))
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
          <p>Tools and technologies I work with to build and automate infrastructure</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="category-header">
                <span className="category-icon" role="img" aria-label={category.title}>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list" role="list">
                {category.skills.map((skill, skillIdx) => {
                  const skillId = `${idx}-${skillIdx}`
                  const isAnimated = animatedSkills[skillId]
                  
                  return (
                    <div 
                      key={skillIdx} 
                      className="skill-item" 
                      role="listitem"
                      data-skill-id={skillId}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level" aria-label={`${skill.level} percent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar" role="progressbar" 
                        aria-valuenow={skill.level} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: isAnimated ? `${skill.level}%` : '0%',
                            transition: isAnimated ? 'width 1s ease-out' : 'none'
                          }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tools-showcase">
          <h3>Other Tools I Use</h3>
          <div className="tools-grid" role="list">
            {['Git', 'NGINX', 'Helm', 'PostgreSQL', 'MongoDB', 'Redis', 'Vagrant', 'Packer', 'SonarQube', 'Selenium', 'Jira', 'Slack'].map((tool, idx) => (
              <div key={idx} className="tool-chip" role="listitem" title={tool}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills