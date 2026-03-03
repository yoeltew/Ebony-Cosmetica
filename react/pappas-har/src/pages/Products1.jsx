// src/pages/Products.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  // Här sparar vi produkterna vi hämtar från backend
  const [products, setProducts] = useState([])

  // Denna körs EN gång när sidan laddas
  useEffect(() => {
    fetch('http://127.0.0.1:8000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Kunde inte hämta produkter:", err))
  }, [])

  return (
    <>
      {/* PAGE TITLE BANNER */}
      <div className="bg-gray-100 py-12 text-center border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-light uppercase tracking-widest text-black mb-2">Alla Produkter</h1>
        <p className="text-gray-500 text-sm">Hämtar {products.length} produkter från databasen...</p>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR (Filter - Bara visuellt just nu) */}
        <aside className="w-full md:w-1/4 pr-4 hidden md:block">
          <div className="sticky top-24">
            <h3 className="font-bold text-sm uppercase tracking-wide border-b border-black pb-2 mb-4">Kategorier</h3>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li><label className="flex items-center hover:text-black cursor-pointer"><input type="checkbox" className="mr-3 accent-black" /> Hårvård</label></li>
              <li><label className="flex items-center hover:text-black cursor-pointer"><input type="checkbox" className="mr-3 accent-black" /> Löshår</label></li>
              <li><label className="flex items-center hover:text-black cursor-pointer"><input type="checkbox" className="mr-3 accent-black" /> Styling</label></li>
            </ul>
          </div>
        </aside>

        {/* PRODUKT GRID */}
        <main className="w-full md:w-3/4">
          
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <span className="text-sm text-gray-500">Sortera efter:</span>
            <select className="border-none bg-transparent text-sm font-bold uppercase cursor-pointer focus:ring-0">
              <option>Mest populära</option>
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

            {/* HÄR MAPPAr VI UT PRODUKTERNA FRÅN BACKEND! */}
            {products.map((product) => (
                <div key={product.id} className="bg-white group cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-xl transition duration-300 flex flex-col">
                    <div className="relative overflow-hidden">
                        
                        {/* Om det är löshår, länka till AI-sidan, annars bara en bild */}
                        {product.category === "Löshår" ? (
                             <Link to="/ai-style">
                                <img src="https://placehold.co/400x533?text=Extensions" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700" />
                                <span className="absolute top-2 right-2 bg-black text-white border border-black text-[10px] font-bold px-2 py-1 uppercase hover:bg-white hover:text-black transition">
                                    AI Try-On
                                </span>
                             </Link>
                        ) : (
                            <img src={`https://placehold.co/400x533?text=${product.name}`} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700" />
                        )}

                    </div>
                    <div className="p-4 text-center mt-auto">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-gray-500 text-xs mb-2">{product.category}</p>
                        <span className="block text-base font-bold text-black mb-3">{product.price} kr</span>
                        <button className="w-full bg-white border border-black text-black py-2 text-xs font-bold uppercase hover:bg-black hover:text-white transition">Köp</button>
                    </div>
                </div>
            ))}

          </div>
        </main>
      </div>
    </>
  )
}