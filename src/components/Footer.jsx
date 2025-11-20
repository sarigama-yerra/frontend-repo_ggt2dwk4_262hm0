export default function Footer() {
  return (
    <footer className="bg-[#110a06] text-amber-100/80 border-t border-amber-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h4 className="font-serif text-xl text-amber-50">La Nonna Martigny</h4>
          <p className="mt-2 text-sm">Place Centrale 5-7, 1920 Martigny</p>
          <p className="text-sm">Tél. 027 722 11 89 • info@lanonnamartigny.ch</p>
        </div>
        <div>
          <h5 className="font-semibold text-amber-200">Horaires</h5>
          <p className="mt-2 text-sm">Lun-Dim: 10:00 – 23:00</p>
        </div>
        <div>
          <h5 className="font-semibold text-amber-200">Liens</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li><a className="hover:text-amber-50" href="#">Mentions légales</a></li>
            <li><a className="hover:text-amber-50" href="#">Politique de confidentialité</a></li>
            <li><a className="hover:text-amber-50" href="https://www.ubereats.com/ch-it/store/la-nonna/796G31GmWHK5kJyY_5jhuw" target="_blank" rel="noreferrer">Commander (Uber Eats)</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-amber-100/60 pb-6">© {new Date().getFullYear()} La Nonna Martigny — Restaurant italien à Martigny</div>
    </footer>
  )
}
