import { useState } from 'react'
import './components.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, connect to a backend or email service
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: '✉️', title: 'Email', value: 'achinthabhanuka45@gmail.com', link: 'mailto:achinthabhanuka45@gmail.com' },
    { icon: '💼', title: 'LinkedIn', value: 'linkedin.com/in/achintha', link: 'https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266' },
    { icon: '🐙', title: 'GitHub', value: 'github.com/achinthabh', link: 'https://github.com/achinthabh' },
    { icon: '📍', title: 'Location', value: 'Colombo, Sri Lanka', link: null }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Interested in collaboration or have questions? Reach out!</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing DevOps projects, 
              infrastructure challenges, or potential opportunities.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="contact-detail">
                  <span className="contact-icon">{info.icon}</span>
                  <div>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <a href="https://github.com/achinthabh" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://dev.to/achintha_bhanukawjerathn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-dev"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or question..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact