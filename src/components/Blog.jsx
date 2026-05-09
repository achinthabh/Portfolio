import { useState } from 'react'
import './components.css'

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null)

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with Docker: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of Docker containerization and how it revolutionizes application deployment.',
      date: 'May 15, 2024',
      readTime: '8 min read',
      icon: '🐳',
      tags: ['Docker', 'DevOps', 'Containers'],
      category: 'DevOps'
    },
    {
      id: 2,
      title: 'AWS Fundamentals: EC2, S3, and RDS Explained',
      excerpt: 'Dive into AWS core services and understand how to build scalable cloud infrastructure.',
      date: 'May 10, 2024',
      readTime: '12 min read',
      icon: '☁️',
      tags: ['AWS', 'Cloud', 'Infrastructure'],
      category: 'Cloud'
    },
    {
      id: 3,
      title: 'Understanding Kubernetes Orchestration',
      excerpt: 'Master container orchestration with Kubernetes and deploy applications at scale.',
      date: 'May 5, 2024',
      readTime: '15 min read',
      icon: '⛵',
      tags: ['Kubernetes', 'Orchestration', 'DevOps'],
      category: 'DevOps'
    },
    {
      id: 4,
      title: 'Infrastructure as Code with Terraform',
      excerpt: 'Learn how to automate infrastructure provisioning and management using Terraform.',
      date: 'April 28, 2024',
      readTime: '10 min read',
      icon: '🏗️',
      tags: ['Terraform', 'IaC', 'Infrastructure'],
      category: 'Infrastructure'
    },
    {
      id: 5,
      title: 'CI/CD Pipelines with GitHub Actions',
      excerpt: 'Build automated deployment pipelines using GitHub Actions for continuous integration.',
      date: 'April 20, 2024',
      readTime: '11 min read',
      icon: '🔄',
      tags: ['GitHub', 'CI/CD', 'Automation'],
      category: 'DevOps'
    },
    {
      id: 6,
      title: 'Network Security Best Practices',
      excerpt: 'Essential security practices for building resilient and protected network infrastructure.',
      date: 'April 15, 2024',
      readTime: '9 min read',
      icon: '🔐',
      tags: ['Security', 'Networking', 'Best Practices'],
      category: 'Networking'
    }
  ]

  const allTags = [...new Set(blogs.flatMap(blog => blog.tags))]
  
  const filteredBlogs = selectedTag 
    ? blogs.filter(blog => blog.tags.includes(selectedTag))
    : blogs

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-title">
          <h2>Learning Insights</h2>
          <p>Articles and guides about my DevOps and Cloud journey</p>
        </div>
        
        <div className="project-filters" role="group" aria-label="Filter blog posts by tag">
          <button 
            className={`filter-btn ${!selectedTag ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
            aria-pressed={!selectedTag}
          >
            All Posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image">
                <i>{blog.icon}</i>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="fas fa-calendar"></i> {blog.date}
                  </span>
                  <span className="blog-read-time">
                    <i className="fas fa-clock"></i> {blog.readTime}
                  </span>
                </div>
                
                <h3 className="blog-title">{blog.title}</h3>
                
                <p className="blog-excerpt">{blog.excerpt}</p>
                
                <div className="blog-tags">
                  {blog.tags.map((tag, idx) => (
                    <span key={idx} className="blog-tag">{tag}</span>
                  ))}
                </div>
                
                <a href="#" className="blog-read-more" onClick={(e) => e.preventDefault()}>
                  Read More
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
