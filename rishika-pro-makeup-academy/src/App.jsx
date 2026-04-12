import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Packages from './pages/Packages'
import PackageDetail from './pages/PackageDetail'
import ClassesPage from './pages/ClassesPage'
import ClassDetail from './pages/ClassDetail'
import Works from './pages/Works'
import './App.css'

function Loader() {
  return (
    <div className="loader">
      <div className="loader-ring" />
      <h2>Rishika Pro</h2>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:slug" element={<PackageDetail />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:slug" element={<ClassDetail />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
