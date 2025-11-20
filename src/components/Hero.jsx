import { motion } from 'framer-motion'

export default function Hero({ onOpenReserve }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541542684-4a6712caca34?q=80&w=2000&auto=format&fit=crop"
          alt="Salle de restaurant chaleureuse"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b120d]/60 via-[#1b120d]/70 to-[#1b120d]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-6xl text-amber-50 max-w-3xl"
        >
          Notre cuisine fleure de la joie de vivre
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-amber-100/90 max-w-xl"
        >
          Pizzeria & trattoria au cœur de Martigny. Produits de saison, recettes de famille, et un accueil comme chez la Nonna.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <button onClick={onOpenReserve} className="rounded-full bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 font-semibold shadow hover:shadow-amber-900/40">
            Réserver maintenant
          </button>
          <a href="#menu" className="rounded-full border border-amber-400/40 px-6 py-3 text-amber-100 hover:bg-amber-400/10">
            Voir le menu
          </a>
          <a href="https://www.ubereats.com/ch-it/store/la-nonna/796G31GmWHK5kJyY_5jhuw" target="_blank" rel="noreferrer" className="rounded-full border border-amber-400/40 px-6 py-3 text-amber-100 hover:bg-amber-400/10">
            Commander
          </a>
        </motion.div>
      </div>
    </section>
  )
}
