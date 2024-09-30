import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface PlanningOption {
  image: string;
  price: string;
  priceHindi: string;
  title: string;
  titleHindi: string;
  features: string[];
  featuresHindi: string[];
}

const planningOptions: PlanningOption[] = [
  {
    image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-18-24%20(1)-iSvg3IWxOO8dUVQx9nGsXGDQm8IG7H.jpg',
    price: '4 Rupees per square feet',
    priceHindi: '4 रुपये प्रति वर्ग फुट',
    title: '1st Plan',
    titleHindi: 'पहली योजना',
    features: [
      '2D planning',
      '3 changes available',
      'Includes Column & beam drawings'
    ],
    featuresHindi: [
      '2डी नक्शा',
      '3 परिवर्तन करवा सकते हैं',
      'इसमे कॉलम और बीम का नक्शा भी दिया जाएगा'
    ]
  },
  {
    image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-18-28-3hOLPFMbB1vandPae1BcG7ALeSL656.jpg',
    price: '5 Rupees per square feet',
    priceHindi: '5 रुपये प्रति वर्ग फुट',
    title: '2nd Plan',
    titleHindi: 'दूसरी योजना',
    features: [
      '2D planning',
      'Includes Columns and beam drawings',
      'Electrician drawing',
      'Plumbing drawing',
      'Senting drawing',
      'Loha jaal drawing'
    ],
    featuresHindi: [
      '2डी नक्शा',
      'इसमे कॉलम और बीम का नक्शा भी दिया जाएगा',
      'इलेक्ट्रीशियन ड्राइंग',
      'प्लंबिंग ड्राइंग',
      'सेंटिंग ड्राइंग',
      'लोहा जाल ड्राइंग'
    ]
  }
]

export default function Planning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold text-neutral-900 mb-6 font-montserrat text-center">
        Planning Services
        <br />
        <span className="text-xl text-neutral-700">योजना सेवाएं</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {planningOptions.map((option, index) => (
          <PlanningCard key={index} item={option} />
        ))}
      </div>
    </motion.div>
  )
}

function PlanningCard({ item }: { item: PlanningOption }) {
  return (
    <Card className="overflow-hidden bg-white border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full pt-[75%]">
          <Image 
            src={item.image} 
            alt={item.title} 
            layout="fill"
            objectFit="contain"
            className="absolute top-0 left-0 w-full h-full origin-center -rotate-90"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <CardTitle className="text-2xl font-semibold text-neutral-900 mb-4 font-montserrat">
          {item.title}
          <br />
          <span className="text-xl text-neutral-700">{item.titleHindi}</span>
        </CardTitle>
        <Badge variant="outline" className="bg-neutral-50 text-neutral-900 px-3 py-1 mb-4 text-sm font-montserrat">
          {item.price} / {item.priceHindi}
        </Badge>
        <ul className="space-y-3">
          {item.features.map((feature, i) => (
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