import FurnitureShowcase from './components/FurnitureShowcase'

import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl sm:text-6xl lg:text-7xl font-bold text-center text-neutral-800 font-cormorant">Shehzaan</h1>
        <p className="text-center text-neutral-600 mb-7 text-sm sm:text-lg md:text-xl lg:text-2xl font-montserrat">Interior & Construction Company</p>
        <FurnitureShowcase />
      </div>
      <ContactSection />
    </main>
  )
}