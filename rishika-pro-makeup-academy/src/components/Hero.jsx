import './Hero.css'

const WA_BOOK = 'https://wa.me/917075928104?text=Hi%20I%20want%20to%20book%20a%20makeup%20appointment'

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80"
      >
        <source src="/videos/herosectionhomepage.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <p className="hero-tagline">Welcome to</p>
        <h1 className="hero-title">Rishika Pro<br />Makeup Academy</h1>
        <p className="hero-sub">Enhancing Beauty, Empowering Careers</p>
        <div className="hero-divider" />
        <a href={WA_BOOK} target="_blank" rel="noreferrer" className="wa-btn hero-btn">
          ✨ Book Now
        </a>
      </div>
      <div className="hero-scroll">
        <span></span>
        <p>Scroll</p>
      </div>
    </section>
  )
}
