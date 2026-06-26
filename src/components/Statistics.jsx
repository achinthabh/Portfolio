import './components.css'

const Statistics = () => {
  const stats = [
    {
      number: '10+',
      label: 'Projects Built',
      description: 'Full-stack, backend & DevOps projects'
    },
    {
      number: '10+',
      label: 'Certifications',
      description: 'Cisco, Fortinet, Linux Foundation & more'
    },
    {
      number: '6+',
      label: 'Tech Stacks',
      description: 'Cloud, containers, IaC, CI/CD & networking'
    },
    {
      number: '2024',
      label: 'Degree Started',
      description: 'BSc Computer Networks'
    }
  ]

  return (
    <section id="statistics" className="statistics">
      <div className="container">
        <div className="section-title">
          <h2>By The Numbers</h2>
          <p>My learning journey and accomplishments at a glance</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number" aria-label={`${stat.number} ${stat.label}`}>
                {stat.number}
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
