import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ReservationModal from './components/ReservationModal'
import Footer from './components/Footer'
import { About, SeasonalMenu, Events, Gallery, Contact } from './components/Sections'

function Home({ onOpenReserve }) {
  const [testimonials, setTestimonials] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${backend}/api/testimonials`).then(r=>r.json()).then(d=>setTestimonials(d.items || [])).catch(()=>{})
  }, [backend])

  return (
    <>
      <Hero onOpenReserve={onOpenReserve} />
      <Features />
      <About />
      <SeasonalMenu />
      <section className="bg-[#1b120d] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-amber-50">Ils ont aimé</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-2xl border border-amber-900/30 bg-gradient-to-b from-[#22150f] to-[#1b120d] p-6 text-amber-100/90">
                <p>“{t.content}”</p>
                <footer className="mt-3 text-amber-300 text-sm">— {t.author} • {"★".repeat(t.rating || 5)}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <Events />
      <Gallery />
      <Contact />
    </>
  )
}

function App() {
  const [reserveOpen, setReserveOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#130c08] text-amber-100 font-sans">
        {/* Background accents */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(245,158,11,0.10),transparent),radial-gradient(800px_400px_at_110%_10%,rgba(225,29,72,0.08),transparent)]" />
        <Navbar onOpenReserve={() => setReserveOpen(true)} />
        <main className="pt-28">
          <Routes>
            <Route path="/" element={<Home onOpenReserve={() => setReserveOpen(true)} />} />
            <Route path="/menu" element={<><SeasonalMenu /><Contact /></>} />
            <Route path="/evenements" element={<><Events /><Contact /></>} />
            <Route path="/galerie" element={<><Gallery /><Contact /></>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
      </div>
    </BrowserRouter>
  )
}

export default App
