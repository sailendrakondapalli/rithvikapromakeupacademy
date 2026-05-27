import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Classes.css'

const items = [
  { icon: '💋', label: 'Basic to Advanced Makeup' },
  { icon: '💇', label: 'Hairstyles' },
  { icon: '🥻', label: 'Saree Draping' },
  { icon: '🌸', label: 'Flower Making' },
]

export default function Classes() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="classes-section" ref={ref}>
      <video
        className="classes-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/AcademyClasses.mp4" type="video/mp4" />
      </video>
      <div className="classes-overlay" />
      <div className="classes-inner">
        <p className="section-subtitle reveal">Learn & Grow</p>
        <h2 className="section-title reveal">Academy Classes</h2>
        <div className="section-divider reveal" />
        <p className="classes-intro reveal">
          Transform your passion into a profession. Our structured programs are designed
          for beginners and professionals alike.
        </p>

        <div className="classes-cta reveal">
          <Link to="/classes" className="wa-btn">Explore Classes</Link>
        </div>
      </div>
    </section>
  )
}
