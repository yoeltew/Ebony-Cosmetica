import { useState, useRef } from 'react';

export default function AiStyle() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setFileData(file);
            setResultImage(null);
        }
    };

    const generateHair = async () => {
        if (!fileData) return;
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

            if (!apiKey) {
                alert("Du saknar API-nyckel i din .env-fil!");
                setIsLoading(false);
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(fileData);

            reader.onloadend = async () => {
                const base64Image = reader.result.split(',')[1];

                // Anropar bild-modellen direkt
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${apiKey}`;
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{
                            parts: [
                                { text: "Add highly realistic, luxurious long hair extensions to the person in this image. Make it look natural and photorealistic. Return ONLY the edited image." },
                                { inlineData: { mimeType: fileData.type, data: base64Image } }
                            ]
                        }],
                        // Detta är kommandot som tvingar modellen att returnera en bild istället för text
                        generationConfig: {
                            responseModalities: ["IMAGE"]
                        }
                    })
                });

                const data = await response.json();
                console.log("Äkta bildsvar från Google:", data);

                // Packar upp bilden från Googles svar och visar den
                if (data.candidates && data.candidates[0].content.parts[0].inlineData) {
                    const generatedImageBase64 = data.candidates[0].content.parts[0].inlineData.data;
                    const mimeType = data.candidates[0].content.parts[0].inlineData.mimeType || 'image/jpeg';
                    setResultImage(`data:${mimeType};base64,${generatedImageBase64}`);
                } else if (data.error) {
                    alert(`Ett fel uppstod: ${data.error.message}`);
                } else {
                    alert("AI:n returnerade ingen bild. Kolla konsolen (F12) för mer info!");
                }

                setIsLoading(false);
            };

        } catch (error) {
            console.error("Fel vid API-anrop:", error);
            alert("Något gick fel när vi kontaktade Google AI Studio!");
            setIsLoading(false);
        }
    };

    return (
        <div className="flex-grow container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Powered by Gemini 3.1 Flash Image</span>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Virtual Hair Try-On</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">Ladda upp en selfie och se hur du passar i våra Luxury Extensions. AI:n genererar en ny bild i realtid!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

                {/* VÄNSTER: UPPLADDNING */}
                <div className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300 text-center flex flex-col justify-center items-center relative overflow-hidden min-h-[500px]">
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

                    {selectedImage ? (
                        <img src={selectedImage} alt="Uppladdad" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                        <>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Ladda upp din bild</h3>
                        </>
                    )}

                    <button onClick={() => fileInputRef.current.click()} className="relative z-10 bg-black text-white px-6 py-3 uppercase text-xs font-bold tracking-wider rounded hover:bg-gray-800 transition mt-4 shadow-lg">
                        {selectedImage ? "Byt bild" : "Välj fil"}
                    </button>
                </div>

                {/* HÖGER: RESULTAT */}
                <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 h-[500px] flex flex-col">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                        <h3 className="font-bold text-sm uppercase">AI Resultat</h3>
                    </div>

                    <div className="relative flex-grow overflow-hidden rounded bg-gray-100 flex items-center justify-center">
                        {isLoading ? (
                            <div className="text-center">
                                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-gray-500 animate-pulse">Genererar magi, detta kan ta några sekunder...</p>
                            </div>
                        ) : resultImage ? (
                            <img src={resultImage} className="w-full h-full object-cover" alt="AI Resultat" />
                        ) : selectedImage ? (
                            <div className="text-center p-6">
                                <p className="text-gray-500 mb-4">Bilden är redo att analyseras!</p>
                                <button onClick={generateHair} className="bg-blue-600 text-white px-6 py-3 uppercase text-xs font-bold tracking-wider rounded hover:bg-blue-700 transition shadow-lg">
                                    Generera Frisyr ✨
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-400 text-sm">Ladda upp en bild först...</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
