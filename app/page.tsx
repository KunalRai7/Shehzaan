// import FurnitureShowcase from './components/FurnitureShowcase'
// import ContactSection from './components/ContactSection'
// import ReviewSection from './components/ReviewSection'

export default function Home() {
  // Set to false to show the actual website, true to show payment notice
  const showPaymentNotice = true;

  if (showPaymentNotice) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg text-center border-t-4 border-red-500">
          <div className="text-6xl mb-6">⚠️</div>
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Website Suspended
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            This website has been temporarily suspended due to non-payment of hosting fees.
          </p>
          <div className="bg-red-50 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-medium">
              Please contact the website administrator to resolve this issue.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            If you are the owner, please complete your payment to restore access.
          </p>
        </div>
      </main>
    );
  }

  // Original website content (hidden when showPaymentNotice is true)
  // return (
  //   <main className="min-h-screen bg-background">
  //     <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
  //       <h1 className="text-7xl sm:text-6xl lg:text-7xl font-bold text-center text-foreground font-dancing-script mb-2">Shehzaan</h1>
  //       <p className="text-center text-muted-foreground mb-7 text-sm sm:text-lg md:text-xl lg:text-2xl font-montserrat">Interior & Construction Company</p>
  //       <FurnitureShowcase />
  //     </div>
  //     <ReviewSection />
  //     <ContactSection />
  //   </main>
  // )
}