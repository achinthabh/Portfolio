import './components.css'

const Skills = () => {
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

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>DevOps Skills & Technologies</h2>
          <p>Tools and technologies I work with to build and automate infrastructure</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tools-showcase">
          <h3>Other Tools I Use</h3>
          <div className="tools-grid">
            {['Git', 'NGINX', 'Helm', 'PostgreSQL', 'MongoDB', 'Redis', 'Vagrant', 'Packer', 'SonarQube', 'Selenium', 'Jira', 'Slack'].map((tool, idx) => (
              <div key={idx} className="tool-chip">
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