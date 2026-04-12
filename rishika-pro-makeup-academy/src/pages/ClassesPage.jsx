import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { classes } from '../data/classes'
import './ClassesPage.css'

const WA = 'https://wa.me/917075928104?text=Hi%20I%20am%20interested%20in%20joining%20your%20classes'

export default function ClassesPage() {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="classes-page" ref={ref}>
      <div
        className="classes-page-hero"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80')` }}
      >
        <div className="classes-page-overlay" />
        <div className="classes-page-hero-content">
          <p className="section-subtitle">Learn with Us</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>Academy Classes</h1>
          <div className="section-divider" />
          <p className="classes-page-sub">Professional training programs for aspiring beauty artists</p>
        </div>
      </div>

      <div className="classes-page-content">
        {classes.map((course, i) => (
          <div
            className={`course-row reveal ${i % 2 === 1 ? 'reverse' : ''}`}
            key={i}
          >
            <div
              className="course-img"
              style={{ backgroundImage: `url('${course.img}')` }}
            >
              <div className="course-img-overlay" />
              <span className="course-big-icon">{course.icon}</span>
            </div>
            <div className="course-info">
              <span className="course-duration">⏱ {course.duration} &nbsp;|&nbsp; {course.fee}</span>
              <h2>{course.title}</h2>
              <div className="section-divider" style={{ margin: '1rem 0' }} />
              <p className="course-desc">{course.desc}</p>
              <ul className="course-topics">
                {course.topics.slice(0, 6).map((t, ti) => (
                  <li key={ti}><span className="check">✓</span> {t}</li>
                ))}
              </ul>
              <div className="course-actions">
                <Link to={`/classes/${course.slug}`} className="course-detail-btn">
                  View Details
                </Link>
                <a href={WA} target="_blank" rel="noreferrer" className="wa-btn course-btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
