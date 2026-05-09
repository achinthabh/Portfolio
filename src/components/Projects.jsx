import { useState } from 'react'
import './components.css'

const Projects = () => {
  const [selectedType, setSelectedType] = useState(null)

  const projects = [
    // ===== NEW LINKEDIN PROJECTS ADDED HERE =====
    {
      title: 'Master D Fan Website',
      description: 'A tribute website for Sri Lankan hip-hop icon Master D, featuring a music player, video gallery, and responsive design. Built as a passion project to showcase modern frontend skills.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS.js', 'Vercel'],
      github: 'https://lnkd.in/g2PCNfF7',
      live: 'https://lnkd.in/gfDH5mA7',
      type: 'Frontend Development',
      features: [
        'Interactive music player with track previews',
        'Embedded music videos and photo gallery',
        'Fully responsive mobile-first design',
        'Modern animations and smooth transitions'
      ],
      note: 'Passion project showcasing UI/UX for music fans'
    },
    {
      title: 'Warehouse Management System',
      description: 'A comprehensive Java-based web application for tracking inventory, processing orders, and managing suppliers. Collaborative team project with 9 members.',
      technologies: ['Java', 'Servlets', 'JSP', 'MySQL', 'Apache Tomcat'],
      github: 'https://lnkd.in/gjiq3ndc',
      live: null,
      type: 'Backend System',
      features: [
        'Inventory tracking with stock level management',
        'Automated purchase and sales order processing',
        'Role-based access (admin, staff, suppliers)',
        'Reporting and inventory trend analysis'
      ],
      note: 'Team project - focused on backend development & database integration'
    },
    
    // ===== YOUR OTHER LINKEDIN PROJECTS =====
    {
      title: 'Tourist Information Web Application',
      description: 'A full-stack web application for Sri Lankan tourism with user registration, destination info, and booking system. Built with Java, Spring Boot, and MySQL.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Full-Stack Development',
      features: [
        'User authentication & authorization',
        'CRUD operations for tourist destinations',
        'Responsive frontend design',
        'Database management with MySQL'
      ],
      note: 'Featured on LinkedIn - Team project with Janith Wathsala'
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, courses, and grades with admin dashboard and reporting features.',
      technologies: ['Java', 'Servlet', 'JSP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Web Application',
      features: [
        'Admin and student role management',
        'Course registration system',
        'Grade tracking and reports',
        'Responsive admin dashboard'
      ]
    },
    {
      title: 'Hotel Management System',
      description: 'Backend system for hotel operations including room booking, guest management, and billing.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Backend System',
      features: [
        'Room availability management',
        'Booking and reservation system',
        'Guest check-in/check-out',
        'Automated billing generation'
      ]
    },
    {
      title: 'E-Commerce Website',
      description: 'Online shopping platform with product catalog, shopping cart, and checkout functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Web Development',
      features: [
        'Product search and filtering',
        'Shopping cart management',
        'User account system',
        'Order processing workflow'
      ]
    },
    
    // ===== YOUR DEVOPS LEARNING PROJECTS =====
    {
      title: 'Automated CI/CD Pipeline for Microservices',
      description: 'Learning project: Implementing a CI/CD pipeline using GitHub Actions, Docker, and Kubernetes.',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm'],
      github: 'https://github.com/achinthabh/devops-learning',
      live: null,
      type: 'CI/CD Learning',
      features: [
        'Multi-stage Docker builds',
        'Automated testing workflow',
        'Basic deployment strategy',
        'Learning infrastructure concepts'
      ],
      level: 'Learning Project'
    },
    {
      title: 'Terraform AWS Infrastructure',
      description: 'Learning project: Infrastructure as Code basics for AWS with VPC and EC2 instances.',
      technologies: ['Terraform', 'AWS', 'VPC', 'EC2'],
      github: 'https://github.com/achinthabh/terraform-learning',
      live: null,
      type: 'Infrastructure Learning',
      features: [
        'Basic Terraform modules',
        'AWS resource provisioning',
        'State file management',
        'Cost optimization learning'
      ],
      level: 'Learning Project'
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Learning project: Setting up monitoring with Prometheus and Grafana on local Kubernetes.',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Helm'],
      github: 'https://github.com/achinthabh/k8s-monitoring',
      live: null,
      type: 'Monitoring Learning',
      features: [
        'Basic metric collection',
        'Simple dashboard creation',
        'Resource monitoring setup',
        'Alert configuration basics'
      ],
      level: 'Learning Project'
    },
    {
      title: 'Dockerized Development Environment',
      description: 'Learning project: Creating containerized environments for web applications.',
      technologies: ['Docker', 'Docker Compose', 'Node.js'],
      github: 'https://github.com/achinthabh/docker-learning',
      live: null,
      type: 'Containerization Learning',
      features: [
        'Basic Dockerfile creation',
        'Multi-container applications',
        'Volume mounting practice',
        'Network configuration basics'
      ],
      level: 'Learning Project'
    }
  ]

  // Get unique project types for filtering
  const projectTypes = ['All', ...new Set(projects.map(p => p.type))]
  
  // Filter projects based on selected type
  const filteredProjects = selectedType && selectedType !== 'All'
    ? projects.filter(p => p.type === selectedType)
    : projects

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Full-stack development projects & DevOps learning initiatives</p>
        </div>
        
        {/* Project Filter Tabs */}
        <div className="project-filters" role="group" aria-label="Filter projects by type">
          {projectTypes.map(type => (
            <button
              key={type}
              className={`filter-btn ${selectedType === type || (!selectedType && type === 'All') ? 'active' : ''}`}
              onClick={() => setSelectedType(type === 'All' ? null : type)}
              aria-pressed={selectedType === type || (!selectedType && type === 'All')}
            >
              {type}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className={`project-card ${project.level === 'Learning Project' ? 'learning-project' : 'real-project'}`}>
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                {project.level && <span className="project-level">{project.level}</span>}
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.note && (
                <div className="project-note">
                  <i className="fas fa-info-circle"></i> {project.note}
                </div>
              )}
              
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
                  <i className="fab fa-github"></i> {project.level === 'Learning Project' ? 'View Learning Code' : 'View Source Code'}
                </a>
                
                {project.level === 'Learning Project' ? (
                  <a 
                    href={`https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fab fa-linkedin"></i> Learning Journey
                  </a>
                ) : (
                  <a 
                    href="https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fab fa-linkedin"></i> Project Post
                  </a>
                )}
                
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
              </div>
            </div>
          ))}
        </div>
        
        {/* LinkedIn Projects Callout */}
        <div className="linkedin-projects">
          <div className="linkedin-card">
            <h3>More Projects on LinkedIn</h3>
            <p>Check out my project posts and learning journey on LinkedIn:</p>
            <div className="linkedin-links">
              <a href="https://www.linkedin.com/posts/janith-wathsala_webdevelopment-tourism-srilanka-activity-7292000718729752578-I6TU" target="_blank" rel="noopener noreferrer">
                Tourist Web App
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7359909721144741889/" target="_blank" rel="noopener noreferrer">
                Student Management System
              </a>
              <a href="https://www.linkedin.com/posts/achintha-bhanuka-wijerathna-250a46266_java-webdevelopment-backend-activity-7329909711640711168-bH_1" target="_blank" rel="noopener noreferrer">
                Hotel Management System
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7350145038791680001/" target="_blank" rel="noopener noreferrer">
                E-Commerce Website
              </a>
              <a href="https://www.linkedin.com/posts/achintha-bhanuka-wijerathna-250a46266_webdevelopment-frontend-srilankanhiphop-activity-7359909721144741889-tfbQ" target="_blank" rel="noopener noreferrer">
                Master D Fan Website
              </a>
              <a href="https://www.linkedin.com/posts/achintha-bhanuka-wijerathna-250a46266_java-webdevelopment-backend-activity-7329909711640711168-bH_1" target="_blank" rel="noopener noreferrer">
                Warehouse Management System
              </a>
            </div>
            <a 
              href="https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-profile-btn"
            >
              <i className="fab fa-linkedin"></i> View My LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects