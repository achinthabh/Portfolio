// src/components/Certifications.jsx
import './components.css'

const Certifications = () => {
  const certifications = [
    { 
      name: 'Fortinet Certified Fundamentals Cybersecurity', 
      status: 'Completed', 
      issuer: 'Fortinet', 
      date: '2024',
      url: 'https://www.credly.com/badges/c186adc8-7dc9-4063-86d7-15d46021d9f9/public_url',
      badge: 'https://images.credly.com/size/340x340/images/22a0ece5-ff05-4594-8320-25e55e9ae203/image.png'
    },
    { 
      name: 'Learning Docker', 
      status: 'Completed', 
      issuer: 'LinkedIn Learning', 
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/b6277701c027eb5943aad9ee048009d630abb1e4d892e07c436b5e17f1f5f046',
      badge: 'https://icon.icepanel.io/Technology/svg/Docker.svg' // LinkedIn logo placeholder
    },
    { 
      name: 'Cybersecurity Awareness:Cybersecurity Terminology', 
      status: 'Completed', 
      issuer: 'Linked In Learning', 
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/0c19834e7bc4dbeba0152ccb40f769a2b9f4106a1dce153857257942192b3fa0',
      badge: 'data:image/png;base64,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'
    },
    { 
      name: 'Introduction to IoT', 
      status: 'Completed', 
      issuer: 'Cisco', 
      date: '2024',
      url: 'https://www.credly.com/badges/7819beb8-490b-4971-a778-479ea84489e9/public_url',
      badge: 'https://images.credly.com/size/340x340/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png'
    },
    { 
      name: 'Introduction to Cybersecurity', 
      status: 'Completed', 
      issuer: 'Cisco', 
      date: '2024',
      url: 'https://www.credly.com/badges/a9a647a5-8334-4ec6-922d-5c1c12ba18a3/public_url',
      badge: 'https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png'
    },
    { 
      name: 'Introduction to the Threat Landscape 3.0', 
      status: 'Completed', 
      issuer: 'Fortinet', 
      date: '2024',
      url: 'https://www.credly.com/badges/3d0a135b-7c7e-4148-906f-346675d5875b/public_url',
      badge: 'https://images.credly.com/size/340x340/images/a06a4e98-21bf-49ab-ad70-c61641f26fc8/blob' // Docker logo placeholder
    },
    { 
      name: 'LFS101: Introduction to Linux', 
      status: 'Completed', 
      issuer: 'Linux Foundation', 
      date: '2024',
      url: 'https://www.credly.com/badges/b40abf6d-39fd-46ff-b9fd-7c8238881cfc/public_url',
      badge: 'https://images.credly.com/size/340x340/images/97a95d07-04c3-4afb-952a-6bcf46ddb87e/blob' // Python logo
    },
    { 
      name: 'Networking Basics', 
      status: 'Completed', 
      issuer: 'Cisco', 
      date: '2024',
      url: 'https://www.credly.com/badges/04954715-afac-4e29-9b8c-4cb6dfad234d/public_url',
      badge: 'https://images.credly.com/size/340x340/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png' // Terraform logo
    },
    { 
      name: 'Network Support and Security', 
      status: 'Completed', 
      issuer: 'Cisco', 
      date: '2024',
      url: 'https://www.credly.com/badges/26dbe076-8c63-4b83-9768-7089e8bfbfee/public_url',
      badge: 'https://images.credly.com/size/340x340/images/a4dd891f-7bf5-4938-8241-50dc81e8cc00/image.png' // Cisco logo
    },
    { 
      name: 'Operating Systems Basics', 
      status: 'Completed', 
      issuer: 'Cisco', 
      date: '2024',
      url: 'https://www.credly.com/badges/25f23f80-4031-40cb-a460-40bcce5a9663/public_url',
      badge: 'https://images.credly.com/size/340x340/images/dcdf1a3c-2594-4f4c-a33a-050b4bca58b5/image.png' // Linux logo
    },
    { 
      name: 'E-commerce Fundamentals', 
      status: 'Completed', 
      issuer: 'Self-Study', 
      date: '2018',
      badge: 'https://cdn-icons-png.flaticon.com/512/2331/2331966.png' // E-commerce icon
    }
  ]

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-title">
          <h2>Certifications & Learning</h2>
          <p>My technical certifications and continuous learning journey</p>
        </div>
        
        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-header">
                <h4>{cert.name}</h4>
                <span className={`cert-status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                  {cert.status}
                </span>
              </div>
              <div className="cert-badge">
                <a href={cert.url || '#'} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={cert.badge} 
                    alt={`${cert.name} badge`} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; // Fallback icon
                    }}
                  />
                </a>
              </div>
              <div className="cert-info">
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              <div className="cert-progress">
                <div 
                  className="progress-bar" 
                  style={{ 
                    width: cert.status === 'Completed' ? '100%' : 
                           cert.status === 'In Progress' ? '60%' : '0%' 
                  }}
                ></div>
              </div>
              <a 
                href={cert.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-link"
                style={{ 
                  opacity: cert.url ? 1 : 0.6,
                  cursor: cert.url ? 'pointer' : 'not-allowed'
                }}
              >
                {cert.url ? 'View Certificate' : 'Certificate'} <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications