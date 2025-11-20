import { Calendar, Utensils, Camera, Building2 } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Utensils, title: 'Cuisine italienne authentique', desc: 'Produits frais, carte de saison, recettes transmises de génération en génération.' },
    { icon: Calendar, title: 'Événements & banquets', desc: 'Grande salle modulable pour repas d’entreprise, séminaires, cocktails dînatoires.' },
    { icon: Camera, title: 'Galerie photo', desc: 'Plongez dans l’ambiance de la maison et découvrez nos plats signature.' },
    { icon: Building2, title: 'Au cœur de Martigny', desc: 'Place Centrale 5-7, 1920 Martigny, à deux pas des principaux sites.' },
  ]

  return (
    <section className="bg-[#1b120d] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-amber-900/30 bg-gradient-to-b from-[#22150f] to-[#1b120d] p-6 text-amber-100/90 hover:border-amber-800/60 transition">
              <Icon className="h-6 w-6 text-amber-400" />
              <h3 className="mt-3 font-semibold text-amber-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
