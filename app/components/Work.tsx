import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useInView } from 'react-intersection-observer';

interface Project {
  src: string;
  alt: string;
}

const interiorProjects: Project[] = [
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

const exteriorProjects: Project[] = [
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const Modal = () => {
    if (!selectedImage) return null;

    return createPortal(
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeModal}>
        <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none"
            onClick={closeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={selectedImage}
            alt="Enlarged project image"
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      </div>,
      document.body
    );
  };

  const renderProjects = (projects: Project[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
      {projects.map((project, index) => (
        <ProjectImage key={index} project={project} index={index} openModal={openModal} />
      ))}
    </div>
  );

  return (
    <>
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
        {renderProjects(interiorProjects)}

        <h3 className="text-2xl font-semibold text-neutral-900 mb-6 font-montserrat text-center">
          Exterior Projects
          <br />
          <span className="text-xl text-neutral-700">बाहरी परियोजनाएँ</span>
        </h3>
        {renderProjects(exteriorProjects)}
      </motion.div>
      <Modal />
    </>
  )
}

interface ProjectImageProps {
  project: Project;
  index: number;
  openModal: (src: string) => void;
}

function ProjectImage({ project, index, openModal }: ProjectImageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div 
      ref={ref}
      className="relative w-full h-48 cursor-pointer group" 
      onClick={() => openModal(project.src)}
    >
      {inView && (
        <>
          <Image 
            src={project.src} 
            alt={project.alt} 
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={index < 4}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}