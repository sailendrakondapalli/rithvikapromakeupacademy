import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { classes } from '../data/classes'
import './ClassDetail.css'

const WA = 'https://wa.me/917075928104?text=Hi%20I%20am%20interested%20in%20joining%20your%20classes'

export default function ClassDetail() {
  const { slug } = useParams()
  const course = classes.find(c => c.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!course) {
    return (
      <div className="detail-not-found">
        <h2>Class not found</h2>
        <Link to="/classes" className="wa-btn">← Back to Classes</Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <div
        className="detail-hero"
        style={{ backgroundImage: `url('${course.img}')` }}
      >
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="detail-category">Academy Course</p>
          <h1>{course.title}</h1>
          <p className="detail-tagline">{course.tagline}</p>
          <p className="detail-price">{course.fee}</p>
        </div>
      </div>

      <div className="detail-body">
        <Link to="/classes" className="detail-back">← All Classes</Link>

        <div className="detail-grid">
          <div className="detail-main">
            <h2>About This Course</h2>
            <p className="detail-desc">{course.desc}</p>

            <h3>Topics Covered</h3>
            <ul className="detail-list">
              {course.topics.map((t, i) => (
                <li key={i}><span className="check">✓</span> {t}</li>
              ))}
            </ul>

            <h3>What You'll Achieve</h3>
            <ul className="detail-list">
              {course.outcomes.map((o, i) => (
                <li key={i}><span className="star">★</span> {o}</li>
              ))}
            </ul>
          </div>

          <div className="detail-sidebar">
            <div className="detail-card">
              <div className="detail-card-price">{course.fee}</div>
              <div className="detail-card-meta">
                <div className="meta-row">
                  <span className="meta-label">⏱ Duration</span>
                  <span>{course.duration}</span>
                </div>
              </div>

              <h4>Available Levels</h4>
              <ul className="detail-features">
                {course.levels.map((l, i) => (
                  <li key={i}><span className="check">✓</span> {l}</li>
                ))}
              </ul>

              <a href={WA} target="_blank" rel="noreferrer" className="wa-btn detail-cta">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
