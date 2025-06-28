import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
function Lightbox() {
    const [showModal, setShowModal] = useState(false);
      const [currentIndex, setCurrentIndex] = useState(0);
      const galleryImages = document.querySelectorAll(".galleryImage");

      
        const closeModal = () => setShowModal(false);
      
        const prevImage = () => {
          setCurrentIndex(
            (prev) =>
              (prev - 1 + project.images.sliderImages.length) %
              project.images.sliderImages.length
          );
        };
      
        const nextImage = () => {
          setCurrentIndex((prev) => (prev + 1) % project.images.sliderImages.length);
        };
  return (
    <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400 cursor-pointer"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute left-5 text-white text-4xl font-bold hover:text-[#FFC107] cursor-pointer"
            >
              &#8592;
            </button>

            <motion.img
              key={currentIndex} // Important: ensures animation when image changes
              src={project.images.sliderImages[currentIndex]}
              alt={`Zoom ${currentIndex}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-[80vh] w-auto object-contain rounded"
            />

            <button
              onClick={nextImage}
              className="absolute right-5 text-white text-4xl font-bold hover:text-[#FFC107] cursor-pointer"
            >
              &#8594;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default Lightbox