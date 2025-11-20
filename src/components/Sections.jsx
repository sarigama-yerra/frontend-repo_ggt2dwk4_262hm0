export function About() {
  return (
    <section className="bg-[#1b120d] py-16" id="a-propos">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-serif text-3xl text-amber-50">À propos</h2>
        <p className="mt-4 text-amber-100/90 leading-relaxed">
          À La Nonna, chaque plat raconte une histoire: celle des recettes de famille, des produits du terroir et d’une passion transmise de génération en génération. Notre équipe met à l’honneur la convivialité italienne, du café du matin aux pizzas au feu de bois, en passant par les pâtes fraîches et les desserts maison.
        </p>
      </div>
    </section>
  )
}

export function SeasonalMenu() {
  const categories = {
    "Antipasti": [
      { name: 'Bruschette al pomodoro', desc: 'Tomates, basilic, huile d’olive', price: '9.–' },
      { name: 'Carpaccio di manzo', desc: 'Roquette, parmesan, citron', price: '18.–' },
    ],
    "Pizze": [
      { name: 'Margherita', desc: 'Sauce tomate San Marzano, Fior di Latte, basilic', price: '16.–' },
      { name: 'Prosciutto e funghi', desc: 'Jambon, champignons, mozzarella', price: '20.–' },
    ],
    "Paste": [
      { name: 'Tagliatelle al ragù', desc: 'Ragù de bœuf mijoté, parmesan', price: '22.–' },
      { name: 'Spaghetti alle vongole', desc: 'Palourdes, ail, persil', price: '26.–' },
    ],
    "Risotti": [
      { name: 'Risotto ai funghi', desc: 'Cèpes, parmesan, crème', price: '24.–' },
    ],
    "Carni": [
      { name: 'Scaloppine al limone', desc: 'Veau, citron, beurre', price: '34.–' },
    ],
    "Dolci": [
      { name: 'Tiramisù della Nonna', desc: 'Café, mascarpone, cacao', price: '10.–' },
    ],
  }

  return (
    <section className="bg-[#170f0b] py-16" id="menu">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl text-amber-50">Carte de saison</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-amber-900/30 bg-gradient-to-b from-[#22150f] to-[#1b120d] p-5">
              <h3 className="text-amber-200 font-semibold">{cat}</h3>
              <ul className="mt-3 space-y-3">
                {items.map(item => (
                  <li key={item.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-amber-50">{item.name}</p>
                      <p className="text-sm text-amber-100/80">{item.desc}</p>
                    </div>
                    <span className="text-amber-200 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Events() {
  return (
    <section className="bg-[#1b120d] py-16">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl text-amber-50">Événements & banquets</h2>
          <p className="mt-4 text-amber-100/90">Salle élégante et modulable idéale pour vos repas d’entreprise, séminaires ou cocktails dînatoires. Capacité jusqu’à 120 personnes, équipements sur demande.</p>
          <ul className="mt-4 list-disc list-inside text-amber-100/80 space-y-1">
            <li>Accompagnement personnalisé</li>
            <li>Menus sur mesure</li>
            <li>Possibilité de privatisation</li>
          </ul>
        </div>
        <EventForm />
      </div>
    </section>
  )
}

function EventForm() {
  const backend = import.meta.env.VITE_BACKEND_URL || ''
  async function submit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.guests = Number(payload.guests || 0)
    try {
      const res = await fetch(`${backend}/api/events`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erreur')
      alert('Votre demande a été envoyée. Merci!')
      e.currentTarget.reset()
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-amber-900/30 bg-gradient-to-b from-[#22150f] to-[#1b120d] p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input name="name" required placeholder="Nom" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <input name="company" placeholder="Société (optionnel)" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <input type="email" name="email" required placeholder="Email" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <input name="phone" required placeholder="Téléphone" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <input type="date" name="event_date" required className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <input name="event_type" required placeholder="Type d’événement" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <input type="number" name="guests" min="10" max="200" required placeholder="Nombre de personnes" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <input type="number" name="budget_chf" step="0.5" placeholder="Budget estimé (CHF)" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <textarea name="message" rows="4" placeholder="Message / besoins spécifiques" className="sm:col-span-2 bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
      <button className="sm:col-span-2 rounded-lg bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 font-semibold">Envoyer la demande</button>
    </form>
  )
}

export function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541714606602-417c9752b31c?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop'
  ]

  return (
    <section className="bg-[#170f0b] py-16" id="galerie">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl text-amber-50">Galerie</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Photo ${i+1} du restaurant`} className="rounded-xl h-40 md:h-56 w-full object-cover" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const backend = import.meta.env.VITE_BACKEND_URL || ''
  async function submit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erreur')
      alert('Merci pour votre message!')
      e.currentTarget.reset()
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <section className="bg-[#1b120d] py-16" id="contact">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl text-amber-50">Contact</h2>
          <p className="mt-4 text-amber-100/90">Place Centrale 5-7, 1920 Martigny, Suisse</p>
          <p className="text-amber-100/90">Tél. 027 722 11 89 • info@lanonnamartigny.ch</p>
          <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-amber-900/30">
            <iframe title="Carte Google" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen
              src="https://www.google.com/maps?q=La+Nonna+Martigny&output=embed"></iframe>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-amber-900/30 bg-gradient-to-b from-[#22150f] to-[#1b120d] p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="name" required placeholder="Nom" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
          <input type="email" name="email" required placeholder="Email" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
          <input name="phone" placeholder="Téléphone (optionnel)" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
          <input name="subject" required placeholder="Objet" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
          <textarea name="message" rows="4" required placeholder="Votre message" className="sm:col-span-2 bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" />
          <button className="sm:col-span-2 rounded-lg bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 font-semibold">Envoyer</button>
        </form>
      </div>
    </section>
  )
}
