import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { packages as allPackages } from '../data/packages'
import './Packages.css'

const WA = 'https://wa.me/917075928104?text=Hi%20I%20am%20interested%20in%20your%20services'

const grouped = [
  {
    category: 'Bridal',
    icon: '👰',
    img: '/images/bridalmakeup.png',
    items: allPackages.filter(p => p.category === 'Bridal'),
  },
  {
    category: 'Party',
    icon: '✨',
    img: '/images/partymakeover.png',
    items: allPackages.filter(p => p.category === 'Party'),
  },
  {
    category: 'Guest',
    icon: '💄',
    img: '/images/guestmakeover.png',
    items: allPackages.filter(p => p.category === 'Guest'),
  },
]

export default function Packages() {
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
    <div className="packages-page" ref={ref}>
      <div
        className="packages-hero"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80')` }}
      >
        <div className="packages-hero-overlay" />
        <div className="packages-hero-content">
          <p className="section-subtitle">Explore</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>Our Packages</h1>
          <div className="section-divider" />
          <p className="packages-hero-sub">Premium makeup services tailored for every occasion</p>
        </div>
      </div>

      <div className="packages-content">
        {grouped.map((pkg, pi) => (
          <div className="pkg-category reveal" key={pi}>
            <div
              className="pkg-category-header"
              style={{ backgroundImage: `url('${pkg.img}')` }}
            >
              <div className="pkg-header-overlay" />
              <div className="pkg-header-content">
                <h2>{pkg.category} Packages</h2>
              </div>
            </div>

            <div className="pkg-cards">
              {pkg.items.map((item, ii) => (
                <div className="pkg-card reveal" key={ii} style={{ transitionDelay: `${ii * 0.1}s` }}>
                  <div className="pkg-card-top">
                    <h3>{item.name}</h3>
                    <p className="pkg-price">{item.price}</p>
                  </div>
                  <ul className="pkg-features">
                    {item.features.map((f, fi) => (
                      <li key={fi}><span className="check">✓</span> {f}</li>
                    ))}
                  </ul>
                  <div className="pkg-card-actions">
                    <Link to={`/packages/${item.slug}`} className="pkg-detail-btn">
                      View Details
                    </Link>
                    <a href={WA} target="_blank" rel="noreferrer" className="wa-btn pkg-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
