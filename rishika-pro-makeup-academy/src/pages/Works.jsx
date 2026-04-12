import { useEffect, useRef, useState } from 'react'
import { works } from '../data/works'
import './Works.css'

const WA = 'https://wa.me/917075928104?text=Hi%20I%20am%20interested%20in%20your%20services'
const tags = ['All', 'Bridal', 'Party', 'Guest', 'Saree']

export default function Works() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [active])

  const filtered = active === 'All' ? works : works.filter(w => w.tag === active)

  return (
    <div className="works-page" ref={ref}>
      {/* Hero */}
      <div className="works-page-hero">
        <div className="works-page-overlay" />
        <div className="works-page-hero-content">
          <p className="section-subtitle">Portfolio</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>Sailaja's Works</h1>
          <div className="section-divider" />
          <p className="works-page-sub">Every look tells a story</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="works-filters">
        {tags.map(tag => (
          <button
            key={tag}
            className={`filter-btn ${active === tag ? 'active' : ''}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="works-grid">
        {filtered.map((w, i) => (
          <div
            className="works-card reveal"
            key={i}
            style={{ transitionDelay: `${(i % 6) * 0.07}s` }}
            onClick={() => setSelected(w)}
          >
            <div className="works-card-img">
              <img src={w.src} alt={w.title} loading="lazy" />
              <div className="works-card-hover">
                <span className="works-card-tag">{w.tag}</span>
                <p className="works-card-desc">{w.desc}</p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="wa-btn works-book-btn"
                  onClick={e => e.stopPropagation()}
                >
                  Book This Look
                </a>
              </div>
            </div>
            <div className="works-caption">
              <span className="works-caption-tag">{w.tag}</span>
              <h4 className="works-caption-title">{w.title}</h4>
              <p className="works-caption-desc">{w.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
            <img src={selected.src} alt={selected.title} />
            <div className="lightbox-info">
              <span className="works-card-tag">{selected.tag}</span>
              <h3>{selected.title}</h3>
              <p>{selected.desc}</p>
              <a href={WA} target="_blank" rel="noreferrer" className="wa-btn">
                Book This Look
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
