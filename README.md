💇‍♂️ Pappas Hår - AI-Powered E-commerce
Pappas Hår är en modern e-handelsplattform för löshår som kombinerar en smidig shoppingupplevelse med den senaste AI-tekniken. Projektet är byggt med en FastAPI-backend och en React-frontend.

✨ Nyckelfunktioner
Virtual Try-On (AI) 📸: Användare kan ladda upp en bild på sig själva och se hur de skulle se ut i ett specifikt löshår. Denna funktion drivs av Google Gemini 3 Flash Image (Nano Banana 2) genom avancerad multi-image-to-image komposition.

Säker Betalning 💳: Fullt integrerad betallösning via Stripe Checkout för en trygg och proffsig köpupplevelse.

Dynamisk Filtrering 🔍: Hitta rätt produkter snabbt genom kategoribasera filtrering som uppdateras i realtid.

Admin Dashboard 🛠️: Ett dolt gränssnitt för att hantera produkter, priser och kategorier direkt i databasen.

🚀 Tech Stack
Frontend
React (Vite)

Tailwind CSS (för styling)

React Router (för navigering)

Backend
FastAPI (Python)

SQLAlchemy (ORM för databas)

PostgreSQL (Databas)

Stripe API (Betalningar)

Google Gemini API (AI Image Generation via Nano Banana 2)

🛠️ Installation & Uppstart
1. Klona repositoryt
Bash
git clone https://github.com/yoeltew/svartman.git
cd svartman
2. Backend (Python)
Skapa en virtuell miljö: python -m venv venv

Aktivera venv: source venv/bin/activate (Mac/Linux) eller .\venv\Scripts\activate (Windows)

Installera paket: pip install -r requirements.txt

Skapa en .env-fil i backend-mappen:

Kodavsnitt
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
STRIPE_SECRET_KEY=sk_test_...
GEMINI_API_KEY=your_google_api_key
Starta servern: uvicorn main:app --reload

3. Frontend (React)
Gå till frontend-mappen: cd frontend

Installera paket: npm install

Starta dev-servern: npm run dev

🧠 Hur fungerar AI-motorn?
Projektet använder Google Gemini 3 Flash Image (Nano Banana 2) för att genomföra "Virtual Try-On". Modellen tar två bild-inputs (en selfie och en produktbild) och använder en multimodal prompt för att slå ihop dessa till en fotorealistisk slutbild. Denna process inkluderar:

Analys av personens ansiktsform och nuvarande hår.

Extraktion av textur och färg från löshårsprodukten.

Generering av en ny bild där produkten appliceras naturligt på användaren.

🏗️ Nästa steg för dig
Skapa en fil som heter README.md i din huvudmapp.

Klistra in texten ovan.

Kör sedan:
