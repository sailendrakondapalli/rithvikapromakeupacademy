import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  // Close menu when clicking outside the nav panel
  useEffect(() => {
    if (!menuOpen) return
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [menuOpen])

  const handleAboutClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      // Already on home page — scroll directly
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to home, then scroll after page loads
      navigate('/')
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <span className="logo-main">Rishika Pro</span>
        <span className="logo-sub">Makeup Academy</span>
      </Link>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className="nav-close-row">
          <button
            className="nav-close-btn"
            onClick={(e) => { e.stopPropagation(); setMenuOpen(false) }}
            aria-label="Close menu"
          >✕</button>
        </li>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><a href="/#about" onClick={handleAboutClick}>About</a></li>
        <li><Link to="/packages" onClick={() => setMenuOpen(false)}>Packages</Link></li>
        <li><Link to="/classes" onClick={() => setMenuOpen(false)}>Classes</Link></li>
        <li>
          <a
            href="https://wa.me/917075928104?text=Hi%20I%20want%20to%20book%20a%20makeup%20appointment"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  )
}
