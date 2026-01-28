import React from 'react'
import { Link } from 'react-router-dom'
import './Articles.css'

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "What I Learned Building on the Open Library API",
      excerpt: "Integrating the Open Library API for Story World Adventures taught me invaluable lessons about working with real-world data. From handling missing fields and pagination quirks to designing experiences for non-technical users, I share practical tips and insights for developers building on public APIs.",
      category: "DevRel",
      date: "January 2026",
      readTime: "6 min read",
      slug: "open-library-api"
    },
    {
      id: 2,
      title: "Building Accessible Web Applications",
      excerpt: "Accessibility isn't optional—it's essential. Learn practical techniques to make your web applications usable by everyone, including keyboard navigation and ARIA attributes.",
      category: "Accessibility",
      date: "December 2025",
      readTime: "7 min read",
      slug: "building-accessible-web-applications"
    },
    {
      id: 3,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "From AI-powered tools to edge computing, discover the technologies shaping the future of web development and how to prepare for what's coming next.",
      category: "Web Dev",
      date: "November 2025",
      readTime: "6 min read",
      slug: "the-future-of-web-development"
    },
    {
      id: 4,
      title: "Optimizing Performance in Modern JavaScript",
      excerpt: "Performance matters. Dive into techniques for optimizing JavaScript applications, including code splitting, lazy loading, and efficient state management.",
      category: "JavaScript",
      date: "October 2025",
      readTime: "8 min read",
      slug: "optimizing-performance-in-modern-javascript"
    }
  ]

  return (
    <section id="articles" className="articles">
      <div className="section-header">
        <h2 className="section-title">Developer Advocate Articles</h2>
        <p className="section-subtitle">
          Sharing knowledge, insights, and best practices from my journey in tech
          
        </p>
      </div>
      <div className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-category">{article.category}</div>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-excerpt">{article.excerpt}</p>
            <div className="article-meta">
              <span className="article-date">{article.date}</span>
              <span className="article-read-time">{article.readTime}</span>
            </div>
            <Link 
              to={article.slug ? `/articles/${article.slug}` : article.link || '#'} 
              className="article-link"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </div>
      <div className="section-footer">
        <a href="#" className="view-all-link">View All Articles →</a>
      </div>
    </section>
  )
}

export default Articles
