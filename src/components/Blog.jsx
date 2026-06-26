import { useState } from 'react'
import './components.css'

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null)

  const blogs = [
    {
      id: 1,
      title: 'AI in Cyber Defense: Building a Web Vulnerability Scanner',
      excerpt: 'Learn how to combine crawling engines with machine learning models to detect and classify web security exploits.',
      date: 'May 20, 2024',
      readTime: '10 min read',
      icon: '🛡️',
      tags: ['Security', 'AI', 'Python'],
      category: 'Cybersecurity',
      url: 'https://dev.to/achintha_bhanukawjerathn'
    },
    {
      id: 2,
      title: 'Demystifying the OWASP Top 10 Web Vulnerabilities',
      excerpt: 'A comprehensive guide to understanding common vulnerabilities like SQLi, XSS, and Broken Access Control.',
      date: 'May 12, 2024',
      readTime: '15 min read',
      icon: '🔐',
      tags: ['OWASP', 'Web Security', 'Pentesting'],
      category: 'Cybersecurity',
      url: null
    },
    {
      id: 3,
      title: 'Network Packet Analysis: A Wireshark Deep Dive',
      excerpt: 'Learn how to capture, filter, and inspect TCP/IP packet streams to analyze network security issues.',
      date: 'May 5, 2024',
      readTime: '8 min read',
      icon: '🌐',
      tags: ['Wireshark', 'Networking', 'Security'],
      category: 'Networking',
      url: null
    },
    {
      id: 4,
      title: 'Getting Started with Docker: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of Docker containerization and how it revolutionizes application deployment.',
      date: 'April 28, 2024',
      readTime: '8 min read',
      icon: '🐳',
      tags: ['Docker', 'DevOps', 'Containers'],
      category: 'DevOps',
      url: null
    },
    {
      id: 5,
      title: 'AWS Fundamentals: EC2, S3, and RDS Explained',
      excerpt: 'Dive into AWS core services and understand how to build scalable cloud infrastructure.',
      date: 'April 20, 2024',
      readTime: '12 min read',
      icon: '☁️',
      tags: ['AWS', 'Cloud', 'Infrastructure'],
      category: 'Cloud',
      url: null
    },
    {
      id: 6,
      title: 'CI/CD Pipelines with GitHub Actions',
      excerpt: 'Build automated deployment pipelines using GitHub Actions for continuous integration.',
      date: 'April 10, 2024',
      readTime: '11 min read',
      icon: '🔄',
      tags: ['GitHub', 'CI/CD', 'Automation'],
      category: 'DevOps',
      url: null
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
          <p>Articles about my DevOps, Cloud, and Networking journey — published on <a href="https://dev.to/achintha_bhanukawjerathn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>Dev.to</a></p>
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
                
                {blog.url ? (
                  <a href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-read-more">
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </a>
                ) : (
                  <span className="blog-read-more" style={{ opacity: 0.5, cursor: 'default' }}>
                    <i className="fas fa-clock"></i> Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
