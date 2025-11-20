import { useState } from 'react'

export default function ReservationModal({ open, onClose }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: ''
  })
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${backend}/api/reservations`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
          ...form,
          guests: Number(form.guests)
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Une erreur est survenue')
      alert('Merci! Votre demande de réservation a été envoyée.')
      onClose()
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl bg-[#1b120d] border border-amber-900/40 p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-amber-50">Réserver une table</h3>
          <button onClick={onClose} className="text-amber-200">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" placeholder="Nom" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input type="email" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" placeholder="Email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" placeholder="Téléphone" required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <input type="date" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" required value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
          <input type="time" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" required value={form.time} onChange={e=>setForm({...form, time:e.target.value})} />
          <input type="number" min="1" max="20" className="bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" placeholder="Nombre de personnes" required value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})} />
          <textarea className="sm:col-span-2 bg-[#130c08] border border-amber-900/30 rounded-lg px-3 py-2 text-amber-100" rows="3" placeholder="Notes (allergies, occasion spéciale, etc.)" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
          <button disabled={loading} className="sm:col-span-2 rounded-lg bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 font-semibold">{loading ? 'Envoi...' : 'Envoyer la demande'}</button>
        </form>
      </div>
    </div>
  )
}
