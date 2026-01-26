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
      featured: true
    },
    {
      id: 2,
      name: "CodeSnippet Manager",
      description: "Organize and share your code snippets with syntax highlighting and search functionality. Perfect for developers.",
      tech: ["Vue.js", "Firebase", "Prism.js"],
      image: "💻",
      link: "#",
      featured: false
    },
    {
      id: 3,
      name: "DevConnect",
      description: "A social platform for developers to connect, share projects, and collaborate. Features real-time chat and project showcases.",
      tech: ["React", "Socket.io", "PostgreSQL"],
      image: "🌐",
      link: "#",
      featured: false
    },
    {
      id: 4,
      name: "API Playground",
      description: "Test and document APIs with an interactive playground. Supports REST, GraphQL, and WebSocket endpoints.",
      tech: ["Next.js", "TypeScript", "GraphQL"],
      image: "🔧",
      link: "#",
      featured: false
    }
  ]

  return (
    <section id="apps" className="apps">
      <div className="section-header">
        <h2 className="section-title">Apps & Projects</h2>
        <p className="section-subtitle">
          Building innovative solutions and bringing ideas to life
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
              <div className="app-actions">
                <a href={app.link} className="app-link">View Project →</a>
                {app.featured && <span className="featured-badge">Featured</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Apps
