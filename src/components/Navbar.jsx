import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Menu' },
  { to: '/evenements', label: 'Événements' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar({ onOpenReserve }) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(v => !v)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-[#1b120d]/70 backdrop-blur supports-[backdrop-filter]:bg-[#1b120d]/60 border border-amber-900/30 shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-rose-500 text-white font-bold shadow-md">LN</span>
              <span className="font-serif text-xl text-amber-100 tracking-wide">La Nonna</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-amber-200' : 'text-amber-100/80 hover:text-amber-50'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:0277221189" className="inline-flex items-center gap-2 text-amber-50/90 hover:text-amber-50 text-sm">
                <Phone className="h-4 w-4" /> 027 722 11 89
              </a>
              <button onClick={onOpenReserve} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-amber-900/40 active:scale-[0.98]">
                <UtensilsCrossed className="h-4 w-4" /> Réserver
              </button>
              <a href="https://www.ubereats.com/ch-it/store/la-nonna/796G31GmWHK5kJyY_5jhuw" target="_blank" rel="noreferrer" className="rounded-full border border-amber-400/40 px-4 py-2 text-sm text-amber-100 hover:bg-amber-400/10">
                Commander
              </a>
            </div>

            <button onClick={toggle} className="md:hidden text-amber-100">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <nav className="flex flex-col gap-2">
                {navItems.map(item => (
                  <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-amber-900/40 text-amber-100' : 'text-amber-100/80 hover:bg-amber-900/30 hover:text-amber-50'}`}>
                    {item.label}
                  </NavLink>
                ))}
                <button onClick={() => { setOpen(false); onOpenReserve(); }} className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 text-sm font-semibold">
                  <UtensilsCrossed className="h-4 w-4" /> Réserver une table
                </button>
                <a href="https://www.ubereats.com/ch-it/store/la-nonna/796G31GmWHK5kJyY_5jhuw" target="_blank" rel="noreferrer" className="w-full text-center rounded-lg border border-amber-400/40 px-4 py-2 text-sm text-amber-100 hover:bg-amber-400/10">
                  Commander (Uber Eats)
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
