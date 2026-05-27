import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { previewWorks } from '../data/works'
import './WorksGallery.css'

export default function WorksGallery() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  // Duplicate items for seamless infinite scroll
  const items = [...previewWorks, ...previewWorks]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let animId
    let pos = 0
    const speed = 0.5

    const animate = () => {
      if (!paused) {
        pos -= speed
        const half = track.scrollWidth / 2
        if (Math.abs(pos) >= half) pos = 0
        track.style.transform = `translateX(${pos}px)`
      }
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [paused])

  return (
    <section className="works-section">
      <div className="works-header">
        <p className="section-subtitle" style={{ color: 'var(--gold)' }}>Portfolio</p>
        <h2 className="works-title">Her Works</h2>
        <div className="section-divider" />
        <p className="works-sub">A glimpse of Shailaja's transformations</p>
      </div>

      <div
        className="works-slider-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="works-track" ref={trackRef}>
          {items.map((w, i) => (
            <div className="works-slide" key={i}>
              <img src={w.src} alt={w.title} loading="lazy" />
              <div className="works-slide-info">
                <span className="works-tag">{w.tag}</span>
                <p>{w.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="works-cta">
        <Link to="/works" className="wa-btn">View All Works</Link>
      </div>
    </section>
  )
}
