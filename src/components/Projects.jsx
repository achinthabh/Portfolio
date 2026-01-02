import './components.css'

const Projects = () => {
  const projects = [
    {
      title: 'Automated CI/CD Pipeline for Microservices',
      description: 'Implemented a complete CI/CD pipeline using GitHub Actions, Docker, and Kubernetes to automate testing, building, and deployment of microservices.',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'AWS EKS'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'CI/CD',
      features: [
        'Multi-stage Docker builds',
        'Automated testing on PRs',
        'Blue-green deployment strategy',
        'Slack notifications for deployment status'
      ]
    },
    {
      title: 'Terraform AWS Infrastructure',
      description: 'Infrastructure as Code for a scalable 3-tier web application on AWS with VPC, Auto Scaling Groups, RDS, and Load Balancers.',
      technologies: ['Terraform', 'AWS', 'VPC', 'RDS', 'EC2'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Infrastructure',
      features: [
        'Modular Terraform structure',
        'Multi-environment support',
        'State management with S3 backend',
        'Cost optimization with Spot Instances'
      ]
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Deployed and configured Prometheus, Grafana, and Alertmanager for monitoring Kubernetes clusters and applications.',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Helm', 'Alertmanager'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Monitoring',
      features: [
        'Custom Grafana dashboards',
        'Resource usage alerts',
        'Application performance metrics',
        'Log aggregation with Loki'
      ]
    },
    {
      title: 'Dockerized Development Environment',
      description: 'Created reproducible development environments using Docker Compose for full-stack applications with database, backend, and frontend services.',
      technologies: ['Docker', 'Docker Compose', 'Node.js', 'PostgreSQL', 'React'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Containerization',
      features: [
        'One-command environment setup',
        'Volume mounting for hot reload',
        'Network isolation between services',
        'Production-like local environment'
      ]
    },
    {
      title: 'Infrastructure Security Automation',
      description: 'Automated security scanning and compliance checks for cloud infrastructure using AWS Config, Security Hub, and custom scripts.',
      technologies: ['AWS Config', 'Security Hub', 'Python', 'Lambda', 'CloudTrail'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Security',
      features: [
        'Automated compliance reports',
        'Security group auditing',
        'IAM policy analysis',
        'Real-time security alerts'
      ]
    },
    {
      title: 'Multi-Cloud Deployment Framework',
      description: 'Framework for deploying applications to multiple cloud providers (AWS, GCP) with consistent configuration and deployment patterns.',
      technologies: ['Terraform', 'AWS', 'Google Cloud', 'GitHub Actions', 'Terragrunt'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Multi-Cloud',
      features: [
        'Provider-agnostic modules',
        'Consistent networking across clouds',
        'Centralized secret management',
        'Disaster recovery readiness'
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>DevOps Projects</h2>
          <p>Infrastructure, automation, and deployment projects I've built</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {project.features && (
                <ul className="project-features">
                  {project.features.map((feature, featureIdx) => (
                    <li key={featureIdx}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
                
                {!project.live && (
                  <span className="project-link disabled">
                    <i className="fas fa-server"></i> Infrastructure Code
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects