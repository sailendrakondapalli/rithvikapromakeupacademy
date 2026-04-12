import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Classes from '../components/Classes'
import WorksGallery from '../components/WorksGallery'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Classes />
      <WorksGallery />
      <Contact />
    </>
  )
}
