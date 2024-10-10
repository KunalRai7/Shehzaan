import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

// Add this interface at the top of the file
interface InteriorItem {
  images: string[];
  title: string;
  titleHindi: string;
  features: string[];
  featuresHindi: string[];
}

const interiorItems: InteriorItem[] = [
  {
    images: [
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_webp,f_avif/int1_ayxejg',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_webp,f_avif/int2_zi2g7w',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_webp,f_avif/int3_lcbh0w',
    ],
    title: 'Interior Design',
    titleHindi: 'इंटीरियर डिजाइन',
    features: [
      '1 Room design rate - 4,000/-',
      'More than 2 room rate - 3,000/- per room',
      '3D design with 2D dimensions',
      '3 Changes available',
      '50% payment must be in advance',
    ],
    featuresHindi: [
      '1 कमरे के डिज़ाइन का रेट - 4,000/-',
      '2 से ज्यादा कामरो के डिजाइन का रेट 3,000/- एक रूम',
      '3डी व्यू 2डी प्लानिंग के साथ',
      '3 परिवर्तन करवा सकते हैं',
      '50% एडवांस देना अनिवार्य है',
    ]
  },
  {
    images: [
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_webp,f_avif/kitchen1_vsxrcc',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_webp,f_avif/kitchen2_i9qrji',
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_webp,f_avif/kitchen3_qpp7wp',
    ],
    title: 'Kitchen Design',
    titleHindi: 'किचन डिजाइन',
    features: [
        '1 Room design rate - 4,000/-',
        'More than 2 room rate - 3,000/- per room',
        '3D design with 2D dimensions',
        '3 Changes available',
        '50% payment must be in advance',
      ],
      featuresHindi: [
        '1 कमरे के डिज़ाइन का रेट - 4,000/-',
        '2 से ज्यादा कामरो के डिजाइन का रेट 3,000/- एक रूम',
        '3डी व्यू 2डी प्लानिंग के साथ',
        '3 परिवर्तन करवा सकते हैं',
        '50% एडवांस देना अनिवार्य है',
    ]
  },
  {
    images: [
      'https://res.cloudinary.com/drwlqwn9k/image/upload/w_800,c_scale,q_auto,f_webp,f_avif/bathroom_qjoavc'
    ],
    title: 'Bathroom Design',
    titleHindi: 'बाथरूम डिजाइन',
    features: [
      '3,000/- bathroom design',
      '3 changes available',
      '2D working dimensions',
      '50% must be in advance',
      'Work duration - 5-8 days',
    ],
    featuresHindi: [
      '3,000/- बाथरूम डिजाइन',
      '3 परिवर्तन करवा सकते हैं',
      '2डी कार्य प्रणाली',
      '50% एडवांस देना अनिवार्य है',
      '5-8 दिन के बीच काम पूरा कर दिया जाएगा',
    ]
  }
]

export default function Interior() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold text-neutral-900 mb-6 font-montserrat text-center">
        Interior Design Solutions
        <br />
        <span className="text-xl text-neutral-700">आंतरिक डिजाइन समाधान</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {interiorItems.map((item: InteriorItem, index: number) => (
          <InteriorCard key={index} item={item} />
        ))}
      </div>
    </motion.div>
  )
}

function InteriorCard({ item }: { item: InteriorItem }) {
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
    const imageElement = document.getElementById(`image-${item.title}`)
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
  }, [item.title, handleTouchStart, handleTouchMove, handleTouchEnd])

  return (
    <Card className="overflow-hidden bg-white border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-64 sm:h-80">
          <Image 
            id={`image-${item.title}`}
            src={item.images[currentImageIndex]} 
            alt={`Interior Design ${currentImageIndex + 1}`} 
            fill
            style={{ objectFit: "cover" }}
            priority={currentImageIndex === 0} // Add priority for the first image
          />
        </div>
        {item.images.length > 1 && (
          <>
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
          </>
        )}
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <CardTitle className="text-2xl font-semibold text-neutral-900 mb-4 font-montserrat">
          {item.title}
          <br />
          <span className="text-xl text-neutral-700">{item.titleHindi}</span>
        </CardTitle>
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