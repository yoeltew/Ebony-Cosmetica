import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react' // <--- NYTT: Importera useState
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products1'
import AiStyle from './pages/AiStyle'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin' || location.pathname === '/login';

  // --- 1. VARUKORGENS "MINNE" ---
  const [cart, setCart] = useState([])

  // --- 2. FUNKTION FÖR ATT LÄGGA TILL ---
  const addToCart = (product) => {
    // Lägg till den nya produkten i listan
    setCart([...cart, product])
    alert(`${product.name} lades i varukorgen!`) // En enkel bekräftelse
  }

  return (
    <div className="bg-white text-gray-900 antialiased flex flex-col min-h-screen font-sans">
      
      {/* 3. SKICKA ANTALET TILL HEADERN */}
      {!isAdminRoute && <Header cartCount={cart.length} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 4. SKICKA FUNKTIONEN TILL PRODUKTSIDAN */}
        <Route path="/produkter" element={<Products addToCart={addToCart} />} />
        
        <Route path="/ai-style" element={<AiStyle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {!isAdminRoute && <Footer />}

    </div>
  )
}

export default App