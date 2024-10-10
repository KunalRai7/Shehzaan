import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
// Remove the following line
// import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

// Add this interface at the top of the file
interface ExteriorItem {
  price: string;
  images: string[];
  size: string;
  sizeHindi: string;
  features: string[];
  featuresHindi: string[];
}

const exteriorItems: ExteriorItem[] = [
  {
    price: "₹6,000/-",
    images: [
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/20ft1_htw28l',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/20ft2_cwtp8f',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/20ft3_arj36n'
    ],
    size: 'If the width of your house is 20 feet or less than',
    sizeHindi: 'अगर आपके घर की चौड़ाई 20 फीट है या फिर उससे कम है',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 10-12 days'
    ],
    featuresHindi: [
      '3डी व्यू 2डी प्लानिंग के साथ',
      '3 परिवर्तन करवा सकते हैं',
      '50% एडवांस देना अनिवार्य है',
      '10-12 दिन के बीच काम पूरा कर दिया जाएगा'
    ]
  },
  {
    images: [
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/Shehzaan/yr8nq155qkaxty6dkc01',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/Shehzaan/usd7v8n1ezpvsvimuimw',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/Shehzaan/gqnmlseh62uyyxos4znh'
    ],
    price: '₹8,000/-',
    size: 'If the width of your house is more than 21 feet',
    sizeHindi: 'अगर आपके घर की चौड़ाई 21 फीट से ज़्यादा है तो',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 15-20 days'
    ],
    featuresHindi: [
      '3डी व्यू 2डी प्लानिंग के साथ',
      '3 परिवर्तन करवा सकते हैं',
      '50% एडवांस देना अनिवार्य है',
      '15-20 दिन के बीच काम पूरा कर दिया जाएगा'
    ]
  },
  {
    images: [
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/corner1_lvrojt',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/corner2_pbhruy',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_auto/corner3_h1jxsq'
    ],
    price: '₹12,000/-',
    size: 'Corner plot 2 side Elevation',
    sizeHindi: ' कोने का प्लॉट 2 तरफ का एलिवेशन',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 12-15 days'
    ],
    featuresHindi: [
      '3डी व्यू 2डी प्लानिंग के साथ',
      '3 परिवर्तन करवा सकते हैं',
      '50% एडवांस देना अनिवार्य है',
      '12-15 दिन के बीच काम पूरा कर दिया जाएगा'
    ]
  }
]

export default function Exterior() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold text-neutral-900 mb-6 font-montserrat text-center">
        Exterior Design Solutions
        <br />
        <span className="text-xl text-neutral-700">बाहरी डिजाइन समाधान</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {exteriorItems.map((item: ExteriorItem, index: number) => (
          <ExteriorCard key={index} item={item} />
        ))}
      </div>
    </motion.div>
  )
}

function ExteriorCard({ item }: { item: ExteriorItem }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    )
  }, [item.images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    )
  }, [item.images.length])

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage()
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevImage()
    }
  }, [nextImage, prevImage])

  useEffect(() => {
    const imageElement = document.getElementById(`image-${item.price}`)
    if (imageElement) {
      imageElement.addEventListener('touchstart', handleTouchStart)
      imageElement.addEventListener('touchmove', handleTouchMove)
      imageElement.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('touchstart', handleTouchStart)
        imageElement.removeEventListener('touchmove', handleTouchMove)
        imageElement.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [item.price, handleTouchStart, handleTouchMove, handleTouchEnd])

  return (
    <Card className="overflow-hidden bg-white border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-64 sm:h-80">
          <Image 
            id={`image-${item.price}`}
            src={item.images[currentImageIndex]} 
            alt={`Exterior Design ${currentImageIndex + 1}`} 
            fill
            style={{ objectFit: "cover" }}
            priority={currentImageIndex === 0} // Add priority for the first image
          />
        </div>
        <button 
          onClick={prevImage} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
        >
          <ChevronLeft className="text-neutral-800" size={24} />
        </button>
        <button 
          onClick={nextImage} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
        >
          <ChevronRight className="text-neutral-800" size={24} />
        </button>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <CardTitle className="text-3xl font-semibold text-neutral-900 mb-2 font-montserrat">{item.price}</CardTitle>
        {item.size && (
          <p className="text-sm text-black-500 mb-4 font-montserrat font-semibold">
            {item.size}
            <br />
            <strong className="text-neutral-600">{item.sizeHindi}</strong>
          </p>
        )}
        <ul className="space-y-3">
          {item.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start text-neutral-700">
              <ArrowRight className="mr-2 h-5 w-5 text-neutral-400 flex-shrink-0" />
              <span className="text-base font-montserrat">
                {feature}
                <br />
                <span className="text-sm text-neutral-600">{item.featuresHindi[i]}</span>
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
//  <Badge variant="outline" className="bg-neutral-50 text-neutral-900 px-3 py-1 mb-4 text-sm font-montserrat">