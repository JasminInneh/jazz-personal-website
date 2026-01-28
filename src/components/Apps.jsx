import React from 'react'
import './Apps.css'

const Apps = () => {
  const apps = [
    {
      id: 1,
      name: "TaskFlow",
      description: "A productivity app that helps teams manage projects with an intuitive kanban board interface. Built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "📊",
      link: "#",
      featured: true,
      comingSoon: true
    }
  ]

  return (
    <section id="apps" className="apps">
      <div className="section-header">
        <h2 className="section-title">Apps & Projects</h2>
        <p className="section-subtitle">
          Currently working on innovative solutions—more projects coming soon
        </p>
      </div>
      <div className="apps-grid">
        {apps.map((app) => (
          <div key={app.id} className={`app-card ${app.featured ? 'featured' : ''}`}>
            <div className="app-icon">{app.image}</div>
            <div className="app-content">
              <h3 className="app-name">{app.name}</h3>
              <p className="app-description">{app.description}</p>
              <div className="app-tech">
                {app.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              {app.featured && (
                <div className="featured-badge-container">
                  <span className="featured-badge">Featured</span>
                </div>
              )}
              <div className="app-actions">
                {app.comingSoon ? (
                  <span className="coming-soon-message" aria-label="Project coming soon: Almost there. One commit at a time.">Coming Soon</span>
                ) : !app.link || app.link === "#" || app.link === "" ? (
                  <span className="coming-soon-message" aria-label="Project coming soon: Almost there. One commit at a time.">Almost there. One commit at a time.</span>
                ) : (
                  <a href={app.link} className="app-link" target="_blank" rel="noopener noreferrer">View Project →</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Apps
