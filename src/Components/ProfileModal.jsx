import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
function ProfileModal({isZoomed, setIsZoomed, modal}) {
  
  const handleClose = () => {
    setIsZoomed(false);
  };

  return (
    <AnimatePresence>
      {isZoomed && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-[#000000bd] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-white rounded-3xl overflow-hidden shadow-xl w-full max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modal}
                alt="Zoomed profile"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProfileModal;
