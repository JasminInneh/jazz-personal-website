import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      scrollToSection('hero')
    } else {
      window.location.href = '/'
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <span className="logo-text">Jazz Inneh</span>
        </Link>
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#articles" onClick={(e) => { e.preventDefault(); scrollToSection('articles') }}>Articles</a>
          <a href="#apps" onClick={(e) => { e.preventDefault(); scrollToSection('apps') }}>Apps</a>
          <a href="#content" onClick={(e) => { e.preventDefault(); scrollToSection('content') }}>Content</a>
          <a href="#speaking" onClick={(e) => { e.preventDefault(); scrollToSection('speaking') }}>Speaking</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
        </nav>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
