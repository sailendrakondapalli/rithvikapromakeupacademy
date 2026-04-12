import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <span className="logo-main">Rishika Pro</span>
        <span className="logo-sub">Makeup Academy</span>
      </Link>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><a href="/#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li>
          <a
            href="https://wa.me/917075928104?text=Hi%20I%20want%20to%20book%20a%20makeup%20appointment"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  )
}
