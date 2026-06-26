import { useState } from 'react'
import emailjs from 'emailjs-com'
import './components.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      setError('Please enter your email address')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (!formData.subject.trim()) {
      setError('Please enter a subject')
      return false
    }
    if (!formData.message.trim()) {
      setError('Please enter your message')
      return false
    }
    if (formData.message.length < 10) {
      setError('Message should be at least 10 characters long')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Achintha',
        reply_to: formData.email
      }

      // Your EmailJS credentials
      const serviceID = 'service_guqe0ma'
      const templateID = 'template_hbbg1rd'
      const userID = 'vJcMOUasCs5Lw7kKI'

      const response = await emailjs.send(serviceID, templateID, templateParams, userID)
      
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
      
    } catch (err) {
      
      // More detailed error messages
      if (err.text && err.text.includes('Invalid login')) {
        setError('Email service configuration error. Please check your EmailJS credentials.')
      } else if (err.text && err.text.includes('Template not found')) {
        setError('Email template not found. Please check your template ID.')
      } else if (err.text && err.text.includes('Service not found')) {
        setError('Email service not found. Please check your service ID.')
      } else if (err.text) {
        setError(`Email sending failed: ${err.text}`)
      } else {
        setError('Failed to send message. Please try again later or contact me directly via email.')
      }
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { 
      icon: '✉️', 
      title: 'Email', 
      value: 'achinthabhanuka45@gmail.com', 
      link: 'mailto:achinthabhanuka45@gmail.com' 
    },
    { 
      icon: '💼', 
      title: 'LinkedIn', 
      value: 'Achintha Bhanuka', 
      link: 'https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266' 
    },
    { 
      icon: '🐙', 
      title: 'GitHub', 
      value: '@achinthabh', 
      link: 'https://github.com/achinthabh' 
    },
    { 
      icon: '📍', 
      title: 'Location', 
      value: 'Colombo, Sri Lanka', 
      link: null 
    }
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
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-text">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <a 
                href="https://github.com/achinthabh" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://dev.to/achintha_bhanukawjerathn" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Dev.to Blog"
              >
                <i className="fab fa-dev"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            
            {success && (
              <div className="alert alert-success">
                <i className="fas fa-check-circle"></i>
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}
            
            {error && (
              <div className="alert alert-error">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or question..."
                  disabled={loading}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
              
              <p className="form-note">
                <small>
                  <i className="fas fa-info-circle"></i> This form uses EmailJS to securely send your message.
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact