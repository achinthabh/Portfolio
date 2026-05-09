import './components.css'

const Testimonials = () => {
  const testimonials = [
    {
      content: 'Achintha demonstrates exceptional dedication to learning cloud technologies. Their structured approach to DevOps fundamentals is impressive and shows real promise.',
      author: 'Learning Mentor',
      title: 'Cloud Architecture Specialist',
      rating: 5
    },
    {
      content: 'The quality of work on the warehouse management system was outstanding. Great attention to detail and problem-solving skills during the team project.',
      author: 'Project Lead',
      title: 'Full-Stack Developer',
      rating: 5
    },
    {
      content: 'As an e-commerce entrepreneur, Achintha has shown remarkable initiative in building digital presence and managing complex business operations effectively.',
      author: 'Business Partner',
      title: 'E-Commerce Director',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What others say about my work and collaboration</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="star-rating" aria-label={`${testimonial.rating} stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              
              <p className="testimonial-content">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p className="author-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
