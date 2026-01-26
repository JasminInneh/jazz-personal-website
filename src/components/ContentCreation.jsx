import React from 'react'
import './ContentCreation.css'

const ContentCreation = () => {
  const contentTypes = [
    {
      id: 1,
      title: "Technical Tutorials",
      description: "Step-by-step guides and tutorials covering modern web development, frameworks, and best practices.",
      icon: "📚",
      platforms: ["Medium", "Dev.to", "Hashnode"],
      stats: "50+ Articles"
    },
    {
      id: 2,
      title: "Video Content",
      description: "Educational videos and live coding sessions on YouTube, covering everything from beginner to advanced topics.",
      icon: "🎥",
      platforms: ["YouTube", "Twitch"],
      stats: "100+ Videos"
    },
    {
      id: 3,
      title: "Social Media",
      description: "Daily tips, quick tutorials, and tech insights shared across social platforms to help developers grow.",
      icon: "📱",
      platforms: ["Twitter", "LinkedIn", "Instagram"],
      stats: "10K+ Followers"
    },
    {
      id: 4,
      title: "Newsletter",
      description: "Weekly curated newsletter with the latest in web development, tools, and resources for developers.",
      icon: "📧",
      platforms: ["Substack"],
      stats: "5K+ Subscribers"
    }
  ]

  return (
    <section id="content" className="content-creation">
      <div className="section-header">
        <h2 className="section-title">Content Creation</h2>
        <p className="section-subtitle">
          Creating educational content across multiple platforms to help developers learn and grow
        </p>
      </div>
      <div className="content-grid">
        {contentTypes.map((content) => (
          <div key={content.id} className="content-card">
            <div className="content-icon">{content.icon}</div>
            <h3 className="content-title">{content.title}</h3>
            <p className="content-description">{content.description}</p>
            <div className="content-platforms">
              {content.platforms.map((platform, index) => (
                <span key={index} className="platform-tag">{platform}</span>
              ))}
            </div>
            <div className="content-stats">{content.stats}</div>
          </div>
        ))}
      </div>
      <div className="content-cta">
        <p>Want to collaborate or feature your project?</p>
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
