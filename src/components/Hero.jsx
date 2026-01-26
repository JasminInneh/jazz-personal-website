import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Jazz</span>
          </h1>
          <p className="hero-subtitle">
            Developer Advocate • Content Creator • Public Speaker
          </p>
          <p className="hero-description">
            I bridge the gap between developers and technology through writing, 
            building, and speaking. Passionate about making tech accessible and 
            empowering others to create amazing things.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('articles')}
            >
              Read My Articles
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-icon">💻</div>
            <h3>Developer Advocate</h3>
            <p>Sharing knowledge through technical articles</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🚀</div>
            <h3>App Builder</h3>
            <p>Creating innovative applications</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🎤</div>
            <h3>Public Speaker</h3>
            <p>Inspiring through talks and presentations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
