import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const WA = 'https://wa.me/917075928104?text=Hi%20I%20am%20interested%20in%20your%20services'

const services = [
  {
    title: 'Bridal Makeover',
    price: '₹15,000 – ₹30,000',
    desc: 'Flawless bridal looks crafted to make your special day unforgettable. Includes trial session.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    icon: '👰',
  },
  {
    title: 'Party Makeover',
    price: '₹10,000 – ₹20,000',
    desc: 'Glamorous party-ready looks for every occasion — from cocktail nights to festive celebrations.',
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
    icon: '✨',
  },
  {
    title: 'Guest Makeover',
    price: '₹4,000 – ₹6,000',
    desc: 'Elegant and polished looks for wedding guests and special events.',
    img: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80',
    icon: '💄',
  },
]

export default function Services() {
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
    <section className="services" ref={ref}>
      <video
        className="services-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-makeup-artist-applying-foundation-to-a-model-42704-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-makeup-brush-on-a-palette-42705-large.mp4" type="video/mp4" />
      </video>
      <div className="services-overlay" />
      <div className="services-inner">
        <p className="section-subtitle reveal">Our Services</p>
        <h2 className="section-title reveal">Packages & Pricing</h2>
        <div className="section-divider reveal" />

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div
                className="service-card-img"
                style={{ backgroundImage: `url('${s.img}')` }}
              >
                <div className="service-card-img-overlay" />
                <span className="service-icon">{s.icon}</span>
              </div>
              <div className="service-card-body">
                <h3>{s.title}</h3>
                <p className="service-price">{s.price}</p>
                <p className="service-desc">{s.desc}</p>
                <a href={WA} target="_blank" rel="noreferrer" className="wa-btn service-btn">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta reveal">
          <Link to="/packages" className="wa-btn outline-btn">View All Packages</Link>
        </div>
      </div>
    </section>
  )
}
