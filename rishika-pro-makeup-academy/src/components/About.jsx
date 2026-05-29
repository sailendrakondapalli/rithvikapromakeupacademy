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
    <section id="about" className="about" ref={ref}>
      <div className="about-left reveal">
        <div className="about-img-wrap">
          <img
            src="/images/image.png"
            alt="Shailaja - Makeup Artist"
            className="about-img"
          />
          <div className="about-img-badge">
            <span className="badge-num">3+</span>
            <span className="badge-label">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="about-right reveal">
        <p className="section-subtitle" style={{ color: 'var(--gold)', textAlign: 'left' }}>Meet the Artist</p>
        <h2 className="about-name">Shailaja</h2>
        <div className="about-divider" />
        <p className="about-desc">
          Shailaja is a certified bridal makeup artist and educator with over 3 years of experience
          in transforming looks and building careers. She specializes in bridal, party, and
          professional makeup, while also mentoring aspiring artists through structured
          academy programs.
        </p>

        <div className="about-stats">
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>

        <div className="about-tags">
          <span>Bridal Makeup</span>
          <span>Party Looks</span>
          <span>Airbrush</span>
          <span>Hair Styling</span>
          <span>Saree Draping</span>
        </div>
      </div>
    </section>
  )
}
