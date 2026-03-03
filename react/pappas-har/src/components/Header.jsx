// src/components/Header.jsx
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      {/* 1. TOP BAR */}
      <div className="bg-black text-white text-center py-2 text-xs font-semibold tracking-widest uppercase">
        Fri frakt över 499 kr | Betala smidigt med Klarna
      </div>

      {/* 2. HEADER */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold tracking-tighter uppercase hover:opacity-80 transition">
          PAPPAS HÅR<span className="text-xs align-top font-normal text-gray-500">.SE</span>
         </Link>
          {/* Sökfält */}
          <div className="w-full md:w-1/3 relative">
            <input 
              type="text" 
              placeholder="Sök produkt..." 
              className="w-full bg-gray-100 border-none rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-black focus:bg-white transition outline-none"
            />
            <button className="absolute right-4 top-3 text-gray-400 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Ikoner */}
          <div className="flex items-center space-x-6">
            {/* Ändra Konto-länken till detta: */}
                <Link to="/login" className="flex flex-col items-center text-xs text-gray-600 hover:text-black group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Konto</span>
                </Link>
            <a href="#" className="flex flex-col items-center text-xs text-gray-600 hover:text-black group">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
              </div>
              <span>Korg</span>
            </a>
          </div>
        </div>

        <nav className="hidden md:block border-t border-gray-100">
          <ul className="flex justify-center space-x-10 py-4 text-xs font-bold uppercase tracking-wider text-gray-600">
            <li><Link to="/" className="text-black underline underline-offset-4 decoration-2">Hem</Link></li>
            <li><Link to="/produkter" className="hover:text-black hover:underline underline-offset-4 decoration-2">Hårvård</Link></li>
            <li><a href="#" className="hover:text-black hover:underline underline-offset-4 decoration-2">Löshår</a></li>
            <li><a href="#" className="text-red-600 hover:text-red-800">Outlet</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}