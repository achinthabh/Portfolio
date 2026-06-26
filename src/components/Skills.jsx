import { useState, useEffect } from 'react'
import './components.css'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({})

  const skillCategories = [
    {
      title: 'Penetration Testing',
      icon: '🔐',
      cyber: true,
      skills: [
        { name: 'Kali Linux', level: 72 },
        { name: 'Nmap / Reconnaissance', level: 70 },
        { name: 'Burp Suite', level: 65 },
        { name: 'Metasploit', level: 60 }
      ]
    },
    {
      title: 'Web Application Security',
      icon: '🛡️',
      cyber: true,
      skills: [
        { name: 'SQL Injection (SQLi)', level: 75 },
        { name: 'Cross-Site Scripting (XSS)', level: 72 },
        { name: 'OWASP Top 10', level: 70 },
        { name: 'Nikto / Web Scanning', level: 65 }
      ]
    },
    {
      title: 'Network Security',
      icon: '🌐',
      cyber: true,
      skills: [
        { name: 'Wireshark / Packet Analysis', level: 68 },
        { name: 'Network Protocols (TCP/IP)', level: 75 },
        { name: 'Firewall Configuration', level: 65 },
        { name: 'VPN & Encryption', level: 62 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      cyber: false,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 72 },
        { name: 'GitHub Actions / CI/CD', level: 75 },
        { name: 'Terraform', level: 68 }
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: '💻',
      cyber: false,
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Bash / Shell Scripting', level: 75 },
        { name: 'JavaScript', level: 72 },
        { name: 'Java', level: 70 }
      ]
    },
    {
      title: 'Systems & Tools',
      icon: '🖥️',
      cyber: false,
      skills: [
        { name: 'Linux / System Admin', level: 78 },
        { name: 'Git & Version Control', level: 82 },
        { name: 'MySQL / PostgreSQL', level: 70 },
        { name: 'Scikit-learn / ML', level: 58 }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillId = entry.target.getAttribute('data-skill-id')
          setAnimatedSkills(prev => ({ ...prev, [skillId]: true }))
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    const skillBars = document.querySelectorAll('[data-skill-id]')
    skillBars.forEach(bar => observer.observe(bar))
    return () => skillBars.forEach(bar => observer.unobserve(bar))
  }, [])

  const securityTools = ['🔴 Kali Linux','🔴 Burp Suite','🔴 Metasploit','🔴 Nmap','🔴 Wireshark','🔴 SQLmap','🔴 OWASP ZAP','🔴 Nikto']
  const devopsTools = ['🔵 Docker','🔵 Kubernetes','🔵 Terraform','🔵 AWS','🔵 GitHub Actions','🔵 Ansible','🔵 Prometheus','🔵 Grafana']

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
          <p>Security tools, cloud platforms, and programming languages I work with</p>
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
                    <div key={skillIdx} className="skill-item" role="listitem" data-skill-id={skillId}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                        <div className="skill-progress" style={{
                          width: isAnimated ? `${skill.level}%` : '0%',
                          transition: isAnimated ? 'width 1s ease-out' : 'none',
                          background: category.cyber ? 'linear-gradient(90deg, #ff006e, #8b5cf6)' : 'linear-gradient(90deg, #00d4ff, #3b82f6)'
                        }}></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-showcase">
          <h3>Tools I Use</h3>
          <div className="tools-grid" role="list">
            {[...securityTools, ...devopsTools].map((tool, idx) => (
              <div key={idx} className="tool-chip" role="listitem" style={{
                borderColor: tool.startsWith('🔴') ? 'rgba(255,0,110,0.35)' : 'rgba(0,212,255,0.25)',
                background: tool.startsWith('🔴') ? 'rgba(255,0,110,0.08)' : 'rgba(0,212,255,0.08)',
                color: tool.startsWith('🔴') ? '#ff6e9e' : undefined
              }}>{tool}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills