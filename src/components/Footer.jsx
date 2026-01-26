import React from 'react'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jasmin-inneh-nicole/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/JasminInneh', icon: '💻' },
  ]

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Let's Connect</h3>
            <p className="footer-description">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to collaborate. Feel free to reach out!
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#articles">Articles</a></li>
              <li><a href="#apps">Apps & Projects</a></li>
              <li><a href="#content">Content Creation</a></li>
              <li><a href="#speaking">Public Speaking</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <p>
                <span className="contact-label">Email:</span>
                <a href="mailto:jasmininneh@gmail.com">jasmininneh@gmail.com</a>
              </p>
              <p>
                <span className="contact-label">Available for:</span>
                <span>Speaking • Writing • Consulting</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jazz. All rights reserved.</p>
          <p className="footer-note">Built with React, CSS, and lots of ☕</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
