import FurnitureShowcase from './components/FurnitureShowcase'
import ContactSection from './components/ContactSection'
import ReviewSection from './components/ReviewSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl sm:text-6xl lg:text-7xl font-bold text-center text-foreground font-dancing-script">Shehzaan</h1>
        <p className="text-center text-muted-foreground mb-7 text-sm sm:text-lg md:text-xl lg:text-2xl font-montserrat">Interior & Construction Company</p>
        <FurnitureShowcase />
      </div>
      <ReviewSection />
      <ContactSection />
    </main>
  )
}