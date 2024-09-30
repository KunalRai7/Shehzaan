import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

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
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-59-35-nZine5QYZacSdOOBIC1LhEpby9sw9n.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-22-19-gueC1KstkymuIdX4KpUVscZ0OqDyPT.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-22-22-YMetdLkBBpv6NTbXobB3i7bM0Bv4KY.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-22-25-KSwuoflN9Go2KnnN9riG3qItPSb2BB.jpg',
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
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-45-42-XBGSFM10SFZUpO1Lq93bAEYtGe7Vm6.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-24-34-3cSqO2WIZJU2kqKZft5XVqAOE2hZTV.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-24-37-u1cajL7w2XkEpZRFpw8veONc3mSmYV.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-24-40-7jeP9v5ugrxjPcVC2GcziOzzR9AfVm.jpg',
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
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_17-16-46-UEmQ8GCmRMc12yKSitXUR9NOXUd8GS.jpg'
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    )
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage()
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevImage()
    }
  }

  useEffect(() => {
    const imageElement = document.getElementById(`image-${item.title}`)
    if (imageElement) {
      imageElement.addEventListener('touchstart', handleTouchStart as any, { passive: true })
      imageElement.addEventListener('touchmove', handleTouchMove as any, { passive: true })
      imageElement.addEventListener('touchend', handleTouchEnd, { passive: true })
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('touchstart', handleTouchStart as any)
        imageElement.removeEventListener('touchmove', handleTouchMove as any)
        imageElement.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [item.title])

  return (
    <Card className="overflow-hidden bg-white border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <img 
          id={`image-${item.title}`}
          src={item.images[currentImageIndex]} 
          alt={`Interior Design ${currentImageIndex + 1}`} 
          className="w-full h-64 sm:h-80 object-cover"
        />
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