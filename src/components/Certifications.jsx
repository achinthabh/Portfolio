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
      name: 'Introduction to Cybersecurity', 
      status: 'Completed', 
      issuer: 'Cisco Networking Academy', 
      date: '2024',
      url: 'https://www.credly.com/badges/a9a647a5-8334-4ec6-922d-5c1c12ba18a3/public_url',
      badge: 'https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png'
    },
    { 
      name: 'Network Support and Security', 
      status: 'Completed', 
      issuer: 'Cisco Networking Academy', 
      date: '2024',
      url: 'https://www.credly.com/badges/26dbe076-8c63-4b83-9768-7089e8bfbfee/public_url',
      badge: 'https://images.credly.com/size/340x340/images/a4dd891f-7bf5-4938-8241-50dc81e8cc00/image.png'
    },
    { 
      name: 'Introduction to the Threat Landscape 3.0', 
      status: 'Completed', 
      issuer: 'Fortinet', 
      date: '2024',
      url: 'https://www.credly.com/badges/3d0a135b-7c7e-4148-906f-346675d5875b/public_url',
      badge: 'https://images.credly.com/size/340x340/images/a06a4e98-21bf-49ab-ad70-c61641f26fc8/blob'
    },
    { 
      name: 'Cybersecurity Awareness: Terminology', 
      status: 'Completed', 
      issuer: 'LinkedIn Learning', 
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/0c19834e7bc4dbeba0152ccb40f769a2b9f4106a1dce153857257942192b3fa0',
      badge: 'https://cdn-icons-png.flaticon.com/512/2716/2716612.png'
    },
    { 
      name: 'Networking Basics', 
      status: 'Completed', 
      issuer: 'Cisco Networking Academy', 
      date: '2024',
      url: 'https://www.credly.com/badges/04954715-afac-4e29-9b8c-4cb6dfad234d/public_url',
      badge: 'https://images.credly.com/size/340x340/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png'
    },
    { 
      name: 'LFS101: Introduction to Linux', 
      status: 'Completed', 
      issuer: 'Linux Foundation', 
      date: '2024',
      url: 'https://www.credly.com/badges/b40abf6d-39fd-46ff-b9fd-7c8238881cfc/public_url',
      badge: 'https://images.credly.com/size/340x340/images/97a95d07-04c3-4afb-952a-6bcf46ddb87e/blob'
    },
    { 
      name: 'Operating Systems Basics', 
      status: 'Completed', 
      issuer: 'Cisco Networking Academy', 
      date: '2024',
      url: 'https://www.credly.com/badges/25f23f80-4031-40cb-a460-40bcce5a9663/public_url',
      badge: 'https://images.credly.com/size/340x340/images/dcdf1a3c-2594-4f4c-a33a-050b4bca58b5/image.png'
    },
    { 
      name: 'Learning Docker', 
      status: 'Completed', 
      issuer: 'LinkedIn Learning', 
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/b6277701c027eb5943aad9ee048009d630abb1e4d892e07c436b5e17f1f5f046',
      badge: 'https://icon.icepanel.io/Technology/svg/Docker.svg'
    },
    { 
      name: 'Introduction to IoT', 
      status: 'Completed', 
      issuer: 'Cisco', 
      date: '2024',
      url: 'https://www.credly.com/badges/7819beb8-490b-4971-a778-479ea84489e9/public_url',
      badge: 'https://images.credly.com/size/340x340/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png'
    }
  ]

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-title">
          <h2>Certifications & Badges</h2>
          <p>Verified industry credentials in Cybersecurity, Networking, and Infrastructure</p>
        </div>
        
        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card" style={{
              borderColor: cert.name.toLowerCase().includes('cyber') || cert.name.toLowerCase().includes('security') || cert.name.toLowerCase().includes('threat')
                ? 'rgba(255, 0, 110, 0.25)' 
                : 'rgba(0, 212, 255, 0.2)'
            }}>
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
                    width: cert.status === 'Completed' ? '100%' : '60%',
                    background: cert.name.toLowerCase().includes('cyber') || cert.name.toLowerCase().includes('security') || cert.name.toLowerCase().includes('threat')
                      ? 'linear-gradient(90deg, #ff006e, #8b5cf6)'
                      : 'linear-gradient(90deg, #00d4ff, #3b82f6)'
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
                {cert.url ? 'Verify Credential' : 'Certificate'} <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications