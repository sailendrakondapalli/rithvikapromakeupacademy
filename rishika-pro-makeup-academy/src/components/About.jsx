import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="about"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80')` }}
      ref={ref}
    >
      <div className="about-overlay" />
      <div className="about-content">
        <div className="about-card reveal">
          <p className="section-subtitle">Meet the Artist</p>
          <h2 className="section-title" style={{ color: 'var(--dark)' }}>Sailaja</h2>
          <div className="section-divider" />
          <div className="about-badge">3+ Years Experience</div>
          <p className="about-desc">
            Sailaja is a passionate makeup artist and educator with over 3 years of experience
            in transforming looks and building careers. She specializes in bridal, party, and
            professional makeup, while also mentoring aspiring artists through structured
            academy programs.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">100+</span>
              <span className="stat-label">Students Trained</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
