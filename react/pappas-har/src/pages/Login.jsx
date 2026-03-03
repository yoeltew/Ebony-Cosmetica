// src/pages/Login.jsx
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  // Denna funktion körs när man klickar på "Logga in"
  const handleLogin = (e) => {
    e.preventDefault()
    // I framtiden ska vi kolla lösenord här med Backend/API.
    // Just nu skickar vi bara användaren direkt till Admin-sidan.
    navigate('/admin')
  }

  return (
    <div className="bg-gray-50 h-[80vh] flex flex-col items-center justify-center">

      {/* Enkel Header för Login */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter uppercase">
            PAPPAS HÅR<span className="text-xs align-top font-normal text-gray-500">.SE</span>
        </h1>
        <p className="text-gray-400 text-xs tracking-widest uppercase mt-2">Internal Admin System</p>
      </div>

      {/* Login Box */}
      <div className="bg-white p-10 shadow-xl w-full max-w-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-center uppercase tracking-wide">Logga in</h2>

        <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                <input 
                  type="email" 
                  defaultValue="pappa@butik.se" 
                  className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition"
                />
            </div>

            <div className="mb-8">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Lösenord</label>
                <input 
                  type="password" 
                  defaultValue="password" 
                  className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition"
                />
            </div>

            <button type="submit" className="w-full bg-black text-white font-bold py-3 uppercase text-xs tracking-wider hover:bg-gray-800 transition">
                Logga in
            </button>
        </form>
        
        <div className="text-center mt-6">
            <Link to="/" className="text-xs text-gray-400 hover:text-black border-b border-transparent hover:border-black pb-0.5 transition">
                ← Tillbaka till butiken
            </Link>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400">&copy; 2026 Pappas Hår Admin Portal</p>

    </div>
  )
}