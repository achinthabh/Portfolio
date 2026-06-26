import { useState } from 'react'
import './components.css'

const Projects = () => {
  const [selectedType, setSelectedType] = useState(null)

  const projects = [
    // ===== CYBERSECURITY PROJECTS (real, built by Achintha) =====
    {
      title: 'AI Web Vulnerability Scanner',
      description: 'An intelligent web security scanner that crawls target websites and automatically detects SQL Injection and XSS vulnerabilities. Uses a trained ML model to classify and confirm attack types with higher accuracy than rule-only scanners.',
      technologies: ['Python', 'Scikit-learn', 'BeautifulSoup', 'Requests', 'Pickle'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Cybersecurity',
      badge: '🔍',
      features: [
        'Auto-crawls up to 20 pages on a target domain',
        'SQL Injection detection with multiple payloads',
        'XSS vulnerability scanning and validation',
        'ML-powered attack classification model'
      ],
      highlight: true
    },
    {
      title: 'Password Security Toolkit',
      description: 'A desktop GUI application for password security analysis. Checks password strength, generates SHA-256 hashes, and simulates dictionary attacks to demonstrate how weak passwords are cracked in real-world scenarios.',
      technologies: ['Python', 'Tkinter', 'Hashlib', 'Regex', 'Dictionary Attack'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Cybersecurity',
      badge: '🔐',
      features: [
        'Real-time password strength evaluation (Weak/Medium/Strong)',
        'SHA-256 hash generation for any input',
        'Dictionary attack simulation against hash values',
        'Intuitive Tkinter GUI interface'
      ],
      highlight: true
    },
    {
      title: 'Phishing Email & URL Checker',
      description: 'A full-stack web application that detects phishing URLs and malicious emails. Features a Node.js REST API backend with heuristic analysis and a client-facing interface for real-time phishing detection.',
      technologies: ['Node.js', 'Express', 'REST API', 'JavaScript', 'Heuristics'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Cybersecurity',
      badge: '🎣',
      features: [
        'Real-time URL phishing detection via REST API',
        'Email header and content analysis',
        'Pattern-based heuristic scanning engine',
        'Full-stack architecture (Node.js + Web client)'
      ],
      highlight: true
    },
    // ===== WEB DEVELOPMENT PROJECTS =====
    {
      title: 'Master D Fan Website',
      description: 'A tribute website for Sri Lankan hip-hop icon Master D, featuring a music player, video gallery, and responsive design. Built as a passion project showcasing modern frontend skills.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS.js', 'Vercel'],
      github: 'https://lnkd.in/g2PCNfF7',
      live: 'https://lnkd.in/gfDH5mA7',
      type: 'Web Development',
      badge: '🎵',
      features: [
        'Interactive music player with track previews',
        'Embedded music videos and photo gallery',
        'Fully responsive mobile-first design',
        'Modern animations and smooth transitions'
      ]
    },
    {
      title: 'Tourist Information Web Application',
      description: 'A full-stack web application for Sri Lankan tourism with user registration, destination info, and booking system. Built with Java, Spring Boot, and MySQL.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Web Development',
      badge: '🗺️',
      features: [
        'User authentication & authorization',
        'CRUD operations for tourist destinations',
        'Responsive frontend design',
        'Database management with MySQL'
      ]
    },
    {
      title: 'Warehouse Management System',
      description: 'A comprehensive Java-based web application for tracking inventory, processing orders, and managing suppliers. Collaborative team project with 9 members.',
      technologies: ['Java', 'Servlets', 'JSP', 'MySQL', 'Apache Tomcat'],
      github: 'https://lnkd.in/gjiq3ndc',
      live: null,
      type: 'Web Development',
      badge: '📦',
      features: [
        'Inventory tracking with stock level management',
        'Automated purchase and sales order processing',
        'Role-based access (admin, staff, suppliers)',
        'Reporting and inventory trend analysis'
      ]
    },
    {
      title: 'Hotel Management System',
      description: 'Backend system for hotel operations including room booking, guest management, and billing, built with Spring Boot REST API.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Web Development',
      badge: '🏨',
      features: [
        'Room availability management',
        'Booking and reservation system',
        'Guest check-in/check-out',
        'Automated billing generation'
      ]
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, courses, and grades with admin dashboard and reporting features.',
      technologies: ['Java', 'Servlet', 'JSP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'Web Development',
      badge: '🎓',
      features: [
        'Admin and student role management',
        'Course registration system',
        'Grade tracking and reports',
        'Responsive admin dashboard'
      ]
    },
    // ===== DEVOPS LEARNING PROJECTS =====
    {
      title: 'Automated CI/CD Pipeline',
      description: 'Implementing automated build, test, and deployment pipelines using GitHub Actions, Docker, and Kubernetes for containerized microservices.',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'CI/CD'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'DevOps',
      badge: '🔄',
      features: [
        'Multi-stage Docker builds for smaller images',
        'Automated code linting and unit testing checks',
        'Rolling update deployments to Kubernetes cluster',
        'Secret management using GitHub Encrypted Secrets'
      ]
    },
    {
      title: 'Terraform AWS Infrastructure',
      description: 'Infrastructure as Code (IaC) configuration for deploying standard VPC network infrastructure and secure EC2 hosting on AWS.',
      technologies: ['Terraform', 'AWS', 'VPC', 'EC2', 'Security Groups'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'DevOps',
      badge: '🏗️',
      features: [
        'Modular Terraform codebase for easy reuse',
        'Custom VPC with Public and Private Subnets',
        'State file locking with AWS S3 and DynamoDB',
        'Auto Scaling groups with Application Load Balancers'
      ]
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Setting up cluster-wide monitoring and observability using Prometheus operator and custom Grafana visualization dashboards.',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Helm', 'Slack Alerts'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'DevOps',
      badge: '📊',
      features: [
        'Scraping node-exporter and kube-state-metrics',
        'Custom visualization dashboards for RAM/CPU limits',
        'Prometheus Alertmanager rules configuration',
        'Automated webhook slack alerts for service down'
      ]
    },
    {
      title: 'Dockerized Multi-Service Environment',
      description: 'Creating local containerized setups using Docker Compose to orchestrate web applications, database service instances, and reverse proxies.',
      technologies: ['Docker', 'Docker Compose', 'NGINX', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'DevOps',
      badge: '🐳',
      features: [
        'Multi-container network definition with isolation',
        'NGINX configured as a local reverse proxy',
        'Persistent database storage using Docker Volumes',
        'Environment variable configuration management'
      ]
    },
    {
      title: 'Ansible Configuration Management',
      description: 'Automated server provisioning and software configuration setup using Ansible playbooks to establish secure system state.',
      technologies: ['Ansible', 'Linux', 'YAML', 'SSH Security'],
      github: 'https://github.com/achinthabh',
      live: null,
      type: 'DevOps',
      badge: '⚙️',
      features: [
        'Automated package installs and updates',
        'SSH hardening and firewalls (UFW) setup via playbooks',
        'System user management with sudo access',
        'Idempotent task definitions for reliable execution'
      ]
    }
  ]

  const projectTypes = ['All', 'Cybersecurity', 'Web Development', 'DevOps']
  const filteredProjects = selectedType && selectedType !== 'All'
    ? projects.filter(p => p.type === selectedType)
    : projects

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Real cybersecurity tools, full-stack web apps & DevOps projects</p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects by type">
          {projectTypes.map(type => (
            <button
              key={type}
              className={`filter-btn ${selectedType === type || (!selectedType && type === 'All') ? 'active' : ''}`}
              onClick={() => setSelectedType(type === 'All' ? null : type)}
              aria-pressed={selectedType === type || (!selectedType && type === 'All')}
              style={type === 'Cybersecurity' && (selectedType === 'Cybersecurity' || (!selectedType && false)) ? {
                borderColor: 'rgba(255,0,110,0.5)',
                color: '#ff006e'
              } : {}}
            >
              {type === 'Cybersecurity' && '🔐 '}{type === 'DevOps' && '⚙️ '}{type === 'Web Development' && '🌐 '}{type}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className={`project-card ${project.highlight ? 'cyber-project' : ''}`}
              style={project.highlight ? {
                borderColor: 'rgba(255, 0, 110, 0.3)',
                boxShadow: '0 4px 20px rgba(255, 0, 110, 0.1)'
              } : {}}>
              <div className="project-header">
                <div className="project-type" style={project.type === 'Cybersecurity' ? {
                  background: 'rgba(255,0,110,0.15)',
                  color: '#ff6e9e',
                  borderColor: 'rgba(255,0,110,0.3)'
                } : {}}>
                  {project.badge} {project.type}
                </div>
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
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> View Code
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="linkedin-projects">
          <div className="linkedin-card">
            <h3>📌 More Projects on LinkedIn & GitHub</h3>
            <p>Follow my learning journey and project posts:</p>
            <div className="linkedin-links">
              <a href="https://www.linkedin.com/posts/janith-wathsala_webdevelopment-tourism-srilanka-activity-7292000718729752578-I6TU" target="_blank" rel="noopener noreferrer">Tourist Web App</a>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7359909721144741889/" target="_blank" rel="noopener noreferrer">Student Management</a>
              <a href="https://www.linkedin.com/posts/achintha-bhanuka-wijerathna-250a46266_java-webdevelopment-backend-activity-7329909711640711168-bH_1" target="_blank" rel="noopener noreferrer">Hotel Management</a>
              <a href="https://www.linkedin.com/posts/achintha-bhanuka-wijerathna-250a46266_webdevelopment-frontend-srilankanhiphop-activity-7359909721144741889-tfbQ" target="_blank" rel="noopener noreferrer">Master D Fan Website</a>
            </div>
            <a href="https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266" target="_blank" rel="noopener noreferrer" className="linkedin-profile-btn">
              <i className="fab fa-linkedin"></i> View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects