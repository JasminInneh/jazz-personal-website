import React from 'react'
import './PublicSpeaking.css'

const PublicSpeaking = () => {
  const speakingEngagements = [
    {
      id: 1,
      title: "React Conf 2024",
      topic: "Building Scalable React Applications",
      description: "Shared insights on architecture patterns and best practices for building large-scale React applications.",
      date: "October 2024",
      location: "San Francisco, CA",
      type: "Conference"
    },
    {
      id: 2,
      title: "Web Dev Summit",
      topic: "The Future of Web Development",
      description: "Explored emerging technologies and trends shaping the future of web development.",
      date: "August 2024",
      location: "Virtual",
      type: "Webinar"
    },
    {
      id: 3,
      title: "Local Tech Meetup",
      topic: "Getting Started with Developer Advocacy",
      description: "An introductory talk on how to start your journey as a developer advocate and share knowledge effectively.",
      date: "June 2024",
      location: "New York, NY",
      type: "Meetup"
    },
    {
      id: 4,
      title: "University Guest Lecture",
      topic: "Career Paths in Tech",
      description: "Inspired students by sharing my journey and discussing various career opportunities in technology.",
      date: "May 2024",
      location: "Boston, MA",
      type: "Education"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "March 2025",
      location: "Austin, TX",
      status: "Confirmed"
    },
    {
      id: 2,
      title: "Developer Workshop Series",
      date: "April 2025",
      location: "Virtual",
      status: "Confirmed"
    }
  ]

  return (
    <section id="speaking" className="public-speaking">
      <div className="section-header">
        <h2 className="section-title">Public Speaking</h2>
        <p className="section-subtitle">
          Sharing knowledge and inspiring others through talks, workshops, and presentations
        </p>
      </div>
      
      <div className="speaking-content">
        <div className="past-events">
          <h3 className="subsection-title">Past Engagements</h3>
          <div className="events-grid">
            {speakingEngagements.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-type">{event.type}</div>
                <h4 className="event-title">{event.title}</h4>
                <h5 className="event-topic">{event.topic}</h5>
                <p className="event-description">{event.description}</p>
                <div className="event-meta">
                  <span className="event-date">📅 {event.date}</span>
                  <span className="event-location">📍 {event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="upcoming-events">
          <h3 className="subsection-title">Upcoming Events</h3>
          <div className="upcoming-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="upcoming-card">
                <div className="upcoming-status">{event.status}</div>
                <h4 className="upcoming-title">{event.title}</h4>
                <div className="upcoming-meta">
                  <span>📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="speaking-cta">
        <div className="cta-content">
          <h3>Interested in having me speak?</h3>
          <p>I'm always open to speaking opportunities at conferences, meetups, workshops, and educational institutions.</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Book a Speaking Engagement
          </button>
        </div>
      </div>
    </section>
  )
}

export default PublicSpeaking
