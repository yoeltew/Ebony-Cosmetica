// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-bold text-lg mb-4">Ebony Cosmetica</h4>
          <p className="text-gray-400 text-sm leading-relaxed">Din destination för professionell hårvård och löshår.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Kundservice</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white">Kontakta oss</a></li>
            <li><a href="#" className="hover:text-white">Leveransvillkor</a></li>
            <li><a href="#" className="hover:text-white">Returer</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Betalning</h4>
          <div className="flex justify-center md:justify-start gap-3">
            <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded">KLARNA</div>
            <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded">VISA</div>
          </div>
        </div>
      </div>
    </footer>
  )
}