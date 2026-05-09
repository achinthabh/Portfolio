import './components.css'

const Statistics = () => {
  const stats = [
    {
      number: '5+',
      label: 'Learning Projects',
      description: 'Hands-on cloud and DevOps projects'
    },
    {
      number: '100+',
      label: 'Hours of Practice',
      description: 'Dedicated learning and development'
    },
    {
      number: '10+',
      label: 'Tech Skills',
      description: 'Cloud, networking, and DevOps tools'
    },
    {
      number: '2024',
      label: 'Started Journey',
      description: 'Computer Networks student'
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
