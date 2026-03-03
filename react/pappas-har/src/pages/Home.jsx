// src/pages/Home.jsx
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      {/* HERO SECTION - Här ligger de stora knapparna */}
      <section className="relative bg-gray-100 h-[550px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" 
          alt="Vackert hår" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/95 backdrop-blur-sm p-10 max-w-lg shadow-2xl border-l-4 border-black">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2 block">Nyhet: AI Styling</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Osäker på din look?</h1>
            <p className="text-gray-600 mb-8 text-lg">Testa vårt nya AI-verktyg. Ladda upp en bild och se hur du passar i våra löshår innan du handlar.</p>
            
            {/* HÄR ÄR KNAPPARNA (LÄNKARNA) */}
            <div className="flex gap-4">
              <Link to="/produkter" className="flex-1 text-center bg-black text-white px-6 py-3 uppercase font-bold text-sm tracking-wider hover:bg-gray-800 transition">
                Handla Nu
              </Link>
              <Link to="/ai-style" className="flex-1 text-center border-2 border-black text-black px-6 py-3 uppercase font-bold text-sm tracking-wider hover:bg-black hover:text-white transition">
                Prova AI
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* USP BAR */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-6 text-center text-gray-600 text-sm font-medium uppercase tracking-wide">
          <div className="flex items-center gap-2"><span className="text-xl">🚀</span> Snabb Leverans (1-2 dagar)</div>
          <div className="flex items-center gap-2"><span className="text-xl">💎</span> Äkta produkter från salong</div>
          <div className="flex items-center gap-2"><span className="text-xl">🔒</span> Säker betalning med Klarna</div>
          <div className="flex items-center gap-2"><span className="text-xl">⭐</span> 4.9/5 i kundbetyg</div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
              className="w-full h-[400px] object-cover rounded shadow-lg grayscale hover:grayscale-0 transition duration-700"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Vår Historia</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mer än bara en butik</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Pappas Hår grundades med en enkel vision: att erbjuda professionella hårvårdsprodukter till alla, oavsett var du bor. Med över 30 års erfarenhet i frisörbranschen vet vi vad som krävs för att ditt hår ska må bra.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vi väljer noggrant ut varje produkt i vårt sortiment. Från vårdande oljor till styling som håller hela dagen. Nu tar vi nästa steg med vår AI-teknik för att hjälpa dig hitta rätt stil direkt hemifrån.
            </p>
            <a href="#" className="text-black font-bold uppercase text-sm border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition">
              Läs mer om oss
            </a>
          </div>
        </div>
      </section>

      {/* REKOMMENDERADE PRODUKTER */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-2">Utvalda Favoriter</h2>
            <p className="text-gray-500">Produkterna våra kunder älskar mest just nu.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Produkt 1 */}
            <div className="bg-white group cursor-pointer hover:shadow-xl transition duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13674869-1214937133432912.jpg" 
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase">Bästsäljare</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium mb-1">Shea Moisture Oil</h3>
                <p className="text-gray-500 text-xs mb-3">Bond Repair</p>
                <span className="block font-bold mb-3">229 kr</span>
                <button className="w-full border border-black text-black py-2 text-xs font-bold uppercase hover:bg-black hover:text-white transition">Köp</button>
              </div>
            </div>

            {/* Produkt 2 (Löshår som länkar till AI) */}
            <div className="bg-white group cursor-pointer hover:shadow-xl transition duration-300 block">
              <div className="relative overflow-hidden">
                <Link to="/ai-style">
                    <img 
                      src="https://placehold.co/400x533?text=Extensions" 
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
                    />
                    <span className="absolute top-2 right-2 bg-white text-black border border-black text-[10px] font-bold px-2 py-1 uppercase hover:bg-black hover:text-white transition">
                        AI Try-On
                    </span>
                </Link>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium mb-1">Luxury Extensions</h3>
                <p className="text-gray-500 text-xs mb-3">Äkta Hår 50cm</p>
                <span className="block font-bold mb-3">1 499 kr</span>
                <button className="w-full bg-black text-white py-2 text-xs font-bold uppercase hover:bg-gray-800 transition">Köp</button>
              </div>
            </div>

            {/* Produkt 3 */}
            <div className="bg-white group cursor-pointer hover:shadow-xl transition duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://placehold.co/400x533?text=Vax" 
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium mb-1">Matte Clay</h3>
                <p className="text-gray-500 text-xs mb-3">Stadga 5/5</p>
                <span className="block font-bold mb-3">149 kr</span>
                <button className="w-full border border-black text-black py-2 text-xs font-bold uppercase hover:bg-black hover:text-white transition">Köp</button>
              </div>
            </div>

            {/* Produkt 4 */}
            <div className="bg-white group cursor-pointer hover:shadow-xl transition duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://placehold.co/400x533?text=Olaplex" 
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium mb-1">Olaplex No.3</h3>
                <p className="text-gray-500 text-xs mb-3">Räddaren i nöden</p>
                <span className="block font-bold mb-3">299 kr</span>
                <button className="w-full border border-black text-black py-2 text-xs font-bold uppercase hover:bg-black hover:text-white transition">Köp</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}