import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react' // <--- Vi lade till useEffect

export default function Admin() {
  const [products, setProducts] = useState([]) // <--- För att spara listan
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Välj kategori...",
    image: "",
    description: ""
  })

  // 1. HÄMTA PRODUKTER (När sidan laddas)
  const fetchProducts = () => {
    fetch('http://127.0.0.1:8000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // 2. SKAPA PRODUKT
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.name === "" || formData.price === "") {
        alert("Fyll i namn och pris!")
        return
    }

    await fetch('http://127.0.0.1:8000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })

    alert("Produkt sparad!")
    setFormData({ name: "", price: "", category: "Välj kategori...", image: "", description: "" })
    fetchProducts() // <--- Uppdatera listan direkt!
  }

  // 3. TA BORT PRODUKT (NY FUNKTION)
  const handleDelete = async (id) => {
    if (confirm("Är du säker på att du vill ta bort denna produkt?")) {
        await fetch(`http://127.0.0.1:8000/products/${id}`, {
            method: 'DELETE'
        })
        fetchProducts() // <--- Uppdatera listan efter borttagning
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      
      {/* HEADER */}
      <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                  <span className="font-bold text-lg tracking-tighter uppercase">PAPPAS HÅR</span>
                  <span className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-300">ADMIN</span>
              </div>
              <div className="flex gap-6 text-xs font-bold uppercase tracking-wide">
                  <Link to="/" className="hover:text-gray-300 transition">Visa butik ↗</Link>
                  <Link to="/login" className="text-red-400 hover:text-red-300 transition">Logga ut</Link>
              </div>
          </div>
      </header>

      <div className="container mx-auto py-10 px-4">
          <h1 className="text-2xl font-bold uppercase tracking-wide mb-8">Lagerhantering</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* VÄNSTER: FORMULÄR */}
              <div className="lg:col-span-2 bg-white p-8 rounded shadow-sm border border-gray-100">
                  <h2 className="font-bold text-lg mb-6 border-b border-gray-100 pb-4 uppercase tracking-wide">Ny Produkt</h2>
                  
                  <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-6 mb-4">
                          <div>
                              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Produktnamn</label>
                              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="T.ex. Lyxigt Vax" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Pris (SEK)</label>
                              <input name="price" value={formData.price} onChange={handleChange} type="number" placeholder="199" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition" />
                          </div>
                      </div>
                      <div className="mb-4">
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Bild URL</label>
                          <input name="image" value={formData.image} onChange={handleChange} type="text" placeholder="https://..." className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition" />
                      </div>
                      <div className="mb-4">
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Kategori</label>
                          <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition">
                              <option>Välj kategori...</option>
                              <option>Hårvård</option>
                              <option>Löshår</option>
                              <option>Styling</option>
                          </select>
                      </div>
                      <div className="flex justify-end gap-3 mt-6">
                          <button type="submit" className="bg-blue-600 text-white px-6 py-3 uppercase text-xs font-bold tracking-wider hover:bg-blue-700 transition">Spara Produkt</button>
                      </div>
                  </form>
              </div>

              {/* HÖGER: LISTA (NU ÄR DEN DYNAMISK!) */}
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100 h-fit">
                  <h2 className="font-bold text-lg mb-6 border-b border-gray-100 pb-4 uppercase tracking-wide">
                      Produkter ({products.length})
                  </h2>
                  
                  <ul className="space-y-4 max-h-[500px] overflow-y-auto">
                      {products.map((product) => (
                          <li key={product.id} className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded transition border-b border-gray-50 last:border-0">
                              <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gray-200 rounded overflow-hidden">
                                      <img src={product.image} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                      <p className="text-sm font-bold">{product.name}</p>
                                      <p className="text-xs text-gray-500">{product.price} kr</p>
                                  </div>
                              </div>
                              {/* DELETE BUTTON */}
                              <button onClick={() => handleDelete(product.id)} className="text-gray-300 hover:text-red-600 transition p-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                              </button>
                          </li>
                      ))}
                  </ul>
              </div>

          </div>
      </div>
    </div>
  )
}