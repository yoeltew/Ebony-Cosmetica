// src/pages/AiStyle.jsx
import { Link } from 'react-router-dom'

export default function AiStyle() {
  return (
    <div className="flex-grow container mx-auto px-4 py-12">
        
        <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Beta Version 1.0</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Virtual Hair Try-On</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">Ladda upp en selfie och se hur du passar i våra Luxury Extensions innan du beställer. Drivs av vår egen AI-motor.</p>
        </div>

        {/* SPLIT VIEW: UPLOAD vs RESULT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            
            {/* VÄNSTER: UPLOAD */}
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300 text-center hover:border-black transition cursor-pointer group h-[500px] flex flex-col justify-center items-center relative">
                
                {/* Ikon */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                </div>
                
                <h3 className="font-bold text-lg mb-2">Ladda upp din bild</h3>
                <p className="text-sm text-gray-500 mb-6">Eller dra och släpp filen här</p>
                
                {/* Fejkad uppladdningsknapp */}
                <button className="bg-black text-white px-6 py-3 uppercase text-xs font-bold tracking-wider rounded hover:bg-gray-800 transition">
                    Välj fil
                </button>

                <p className="text-[10px] text-gray-400 mt-8 absolute bottom-8">Stödjer JPG, PNG. Max 5MB.</p>
            </div>

            {/* HÖGER: RESULTAT (Demo) */}
            <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 h-[500px] flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                    <h3 className="font-bold text-sm uppercase">AI Resultat</h3>
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full">Match: 98%</span>
                </div>

                {/* Bilden (Här fuskar vi med en färdig bild för prototypen) */}
                <div className="relative flex-grow overflow-hidden rounded bg-gray-100 group">
                    <img src="https://images.unsplash.com/photo-1519699047748-40ba5266f2bd?q=80&w=1000&auto=format&fit=crop" 
                         className="w-full h-full object-cover" alt="AI Resultat" />
                    
                    {/* Overlay text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                        <p className="font-bold text-lg">Luxury Blonde - 50cm</p>
                        <p className="text-sm opacity-90">Applicerad på din bild</p>
                    </div>
                </div>

                {/* Action Knappar */}
                <div className="mt-4 flex gap-3">
                    <button className="flex-1 bg-black text-white py-3 uppercase text-xs font-bold tracking-wider hover:bg-gray-800 transition">
                        Köp denna look (1499 kr)
                    </button>
                    <button className="px-4 border border-gray-300 rounded hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>

        {/* How it works */}
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 font-bold">1</span>
                <h4 className="font-bold mb-2">Ladda upp</h4>
                <p className="text-sm text-gray-500">Ta en selfie i bra ljus.</p>
            </div>
            <div>
                <span class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 font-bold">2</span>
                <h4 class="font-bold mb-2">Välj stil</h4>
                <p class="text-sm text-gray-500">Vår AI applicerar löshåret.</p>
            </div>
            <div>
                <span class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 font-bold">3</span>
                <h4 class="font-bold mb-2">Handla</h4>
                <p class="text-sm text-gray-500">Köp direkt om du gillar det.</p>
            </div>
        </div>

    </div>
  )
}