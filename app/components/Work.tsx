import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const interiorProjects = [
  { src: '/Shehzaan/images/interior/IMG_3810.JPG', alt: 'Interior Project 1' },
  { src: '/Shehzaan/images/interior/IMG_3811.JPG', alt: 'Interior Project 2' },
  { src: '/Shehzaan/images/interior/IMG_3812.JPG', alt: 'Interior Project 3' },
  { src: '/Shehzaan/images/interior/IMG_3813.JPG', alt: 'Interior Project 4' },
  { src: '/Shehzaan/images/interior/IMG_4165.JPG', alt: 'Interior Project 5' },
  { src: '/Shehzaan/images/interior/IMG_4299.JPG', alt: 'Interior Project 6' },
  { src: '/Shehzaan/images/interior/IMG_4300.JPG', alt: 'Interior Project 7' },
  { src: '/Shehzaan/images/interior/IMG_4302.JPG', alt: 'Interior Project 8' },
  { src: '/Shehzaan/images/interior/IMG_4321.JPG', alt: 'Interior Project 9' },
  { src: '/Shehzaan/images/interior/IMG_4655.JPG', alt: 'Interior Project 10' },
  { src: '/Shehzaan/images/interior/IMG_4656.JPG', alt: 'Interior Project 11' },
  { src: '/Shehzaan/images/interior/IMG_4657.JPG', alt: 'Interior Project 12' },
  { src: '/Shehzaan/images/interior/IMG_4658.JPG', alt: 'Interior Project 13' },
  { src: '/Shehzaan/images/interior/IMG_4659.JPG', alt: 'Interior Project 14' },
  { src: '/Shehzaan/images/interior/IMG_5169.JPG', alt: 'Interior Project 15' },
  { src: '/Shehzaan/images/interior/IMG_5170.JPG', alt: 'Interior Project 16' },
  { src: '/Shehzaan/images/interior/IMG_5171.JPG', alt: 'Interior Project 17' },
  { src: '/Shehzaan/images/interior/IMG_5172.JPG', alt: 'Interior Project 18' },
  { src: '/Shehzaan/images/interior/IMG_5593.JPG', alt: 'Interior Project 19' },
  { src: '/Shehzaan/images/interior/IMG_5594.JPG', alt: 'Interior Project 20' },
  { src: '/Shehzaan/images/interior/IMG_5595.JPG', alt: 'Interior Project 21' },
  { src: '/Shehzaan/images/interior/IMG_5661.JPG', alt: 'Interior Project 22' },
  { src: '/Shehzaan/images/interior/IMG_5662.JPG', alt: 'Interior Project 23' },
  { src: '/Shehzaan/images/interior/IMG_5663.JPG', alt: 'Interior Project 24' },
  { src: '/Shehzaan/images/interior/IMG_5664.JPG', alt: 'Interior Project 25' },
]

const exteriorProjects = [
  { src: '/Shehzaan/images/exterior/IMG_4352.JPG', alt: 'Exterior Project 1' },
  { src: '/Shehzaan/images/exterior/IMG_4353.JPG', alt: 'Exterior Project 2' },
  { src: '/Shehzaan/images/exterior/IMG_4354.JPG', alt: 'Exterior Project 3' },
  { src: '/Shehzaan/images/exterior/IMG_4356.JPG', alt: 'Exterior Project 4' },
  { src: '/Shehzaan/images/exterior/IMG_4357.JPG', alt: 'Exterior Project 5' },
  { src: '/Shehzaan/images/exterior/IMG_4359.JPG', alt: 'Exterior Project 6' },
  { src: '/Shehzaan/images/exterior/IMG_4361.JPG', alt: 'Exterior Project 7' },
  { src: '/Shehzaan/images/exterior/IMG_4368.JPG', alt: 'Exterior Project 8' },
  { src: '/Shehzaan/images/exterior/IMG_4382.JPG', alt: 'Exterior Project 9' },
  { src: '/Shehzaan/images/exterior/IMG_4485.JPG', alt: 'Exterior Project 10' },
  { src: '/Shehzaan/images/exterior/IMG_4515.JPG', alt: 'Exterior Project 11' },
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
                fill
                style={{ objectFit: "cover" }}
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
                fill
                style={{ objectFit: "cover" }}
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