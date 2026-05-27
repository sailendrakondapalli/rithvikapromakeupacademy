import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { packages } from '../data/packages'
import './PackageDetail.css'

const WA = 'https://wa.me/917075928104?text=Hi%20I%20am%20interested%20in%20your%20services'

export default function PackageDetail() {
  const { slug } = useParams()
  const pkg = packages.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!pkg) {
    return (
      <div className="detail-not-found">
        <h2>Package not found</h2>
        <Link to="/packages" className="wa-btn">← Back to Packages</Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <div
        className="detail-hero"
        style={{ backgroundImage: `url('${pkg.img}')` }}
      >
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="detail-category">{pkg.category} Package</p>
          <h1>{pkg.name}</h1>
          <p className="detail-tagline">{pkg.tagline}</p>
          <p className="detail-price">{pkg.price}</p>
        </div>
      </div>

      <div className="detail-body">
        <Link to="/packages" className="detail-back">← All Packages</Link>

        <div className="detail-grid">
          <div className="detail-main">
            <h2>About This Package</h2>
            <p className="detail-desc">{pkg.desc}</p>

            <h3>What's Included</h3>
            <ul className="detail-list">
              {pkg.includes.map((item, i) => (
                <li key={i}><span className="check">✓</span> {item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-sidebar">
            <div className="detail-card">
              <div className="detail-card-price">{pkg.price}</div>
              <div className="detail-card-meta">
                <div className="meta-row">
                  <span className="meta-label">⏱ Duration</span>
                  <span>{pkg.duration}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">✨ Ideal For</span>
                  <span>{pkg.ideal}</span>
                </div>
              </div>
              <h4>Features</h4>
              <ul className="detail-features">
                {pkg.features.map((f, i) => (
                  <li key={i}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noreferrer" className="wa-btn detail-cta">
                Book This Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
