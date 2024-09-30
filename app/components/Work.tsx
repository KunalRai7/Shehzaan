import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const interiorProjects = [
  { src: '/images/interior/IMG_4659.jpg', alt: 'Interior Project 1' },
  { src: '/images/interior/IMG_5169.jpg', alt: 'Interior Project 2' },
  { src: '/images/interior/IMG_5170.jpg', alt: 'Interior Project 3' },
  { src: '/images/interior/IMG_5171.jpg', alt: 'Interior Project 4' },
  { src: '/images/interior/IMG_5172.jpg', alt: 'Interior Project 5' },
  { src: '/images/interior/IMG_5593.jpg', alt: 'Interior Project 6' },
  { src: '/images/interior/IMG_5594.jpg', alt: 'Interior Project 7' },
  { src: '/images/interior/IMG_5595.jpg', alt: 'Interior Project 8' },
  { src: '/images/interior/IMG_5661.jpg', alt: 'Interior Project 9' },
  { src: '/images/interior/IMG_5662.jpg', alt: 'Interior Project 10' },
  { src: '/images/interior/IMG_5663.jpg', alt: 'Interior Project 11' },
  { src: '/images/interior/IMG_5664.jpg', alt: 'Interior Project 12' },
  { src: '/images/interior/IMG_3810.jpg', alt: 'Interior Project 13' },
  { src: '/images/interior/IMG_3811.jpg', alt: 'Interior Project 14' },
 
  { src: '/images/interior/IMG_3813.jpg', alt: 'Interior Project 16' },
  { src: '/images/interior/IMG_4165.jpg', alt: 'Interior Project 17' },
  { src: '/images/interior/IMG_4299.jpg', alt: 'Interior Project 18' },

  { src: '/images/interior/IMG_4302.jpg', alt: 'Interior Project 20' },
  { src: '/images/interior/IMG_4321.jpg', alt: 'Interior Project 21' },
  { src: '/images/interior/IMG_4655.jpg', alt: 'Interior Project 22' },
 
]

const exteriorProjects = [
  { src: '/images/exterior/IMG_4352.jpg', alt: 'Exterior Project 1' },
  { src: '/images/exterior/IMG_4353.jpg', alt: 'Exterior Project 2' },
  { src: '/images/exterior/IMG_4354.jpg', alt: 'Exterior Project 3' },
  { src: '/images/exterior/IMG_4356.jpg', alt: 'Exterior Project 4' },
  { src: '/images/exterior/IMG_4357.jpg', alt: 'Exterior Project 5' },
  { src: '/images/exterior/IMG_4359.jpg', alt: 'Exterior Project 6' },
  { src: '/images/exterior/IMG_4361.jpg', alt: 'Exterior Project 7' },
  { src: '/images/exterior/IMG_4368.jpg', alt: 'Exterior Project 8' },
  { src: '/images/exterior/IMG_4382.jpg', alt: 'Exterior Project 9' },
  { src: '/images/exterior/IMG_4485.jpg', alt: 'Exterior Project 10' },
 
]

export default function Work() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4"
    >
      <h3 className="text-2xl font-semibold text-neutral-900 mb-6 font-montserrat text-center">
        Interior Projects
        <br />
        <span className="text-xl text-neutral-700">आंतरिक परियोजनाएँ</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {interiorProjects.map((project, index) => (
          <div key={index} className="relative w-full h-48">
            {imagesLoaded && (
              <Image 
                src={project.src} 
                alt={project.alt} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-neutral-900 mb-6 font-montserrat text-center">
        Exterior Projects
        <br />
        <span className="text-xl text-neutral-700">बाहरी परियोजनाएँ</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {exteriorProjects.map((project, index) => (
          <div key={index} className="relative w-full h-48">
            {imagesLoaded && (
              <Image 
                src={project.src} 
                alt={project.alt} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}