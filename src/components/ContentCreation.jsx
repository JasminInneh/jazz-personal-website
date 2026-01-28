import React from 'react'
import './ContentCreation.css'

const ContentCreation = () => {
  return (
    <section id="content" className="content-creation">
      <div className="section-header">
        <h2 className="section-title">Content Creation</h2>
        <p className="section-subtitle">
          Creating media and educational content with a sweet spot for EdTech companies and startups
        </p>
      </div>
      
      <div className="content-brief">
        <div className="content-skills">
          <p className="content-intro">
            I create media and educational content that engages audiences and drives learning outcomes. 
            My expertise spans technical writing, video production, social media strategy, and content planning.
          </p>
          
          <div className="content-focus-area">
            <span className="focus-label">Specializing in:</span>
            <span className="focus-badge">EdTech Companies</span>
            <span className="focus-badge">Startups</span>
          </div>

          <div className="content-capabilities">
            <h3 className="capabilities-title">What I Can Create:</h3>
            <ul className="capabilities-list">
              <li>Technical tutorials and documentation</li>
              <li>Educational videos and multimedia content</li>
              <li>Social media content and strategy</li>
              <li>Content calendars and editorial planning</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-cta">
        <p>Ready to create content that engages and educates? Let's work together.</p>
        <button className="btn btn-primary" onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}>
          Let's Connect
        </button>
      </div>
    </section>
  )
}

export default ContentCreation
