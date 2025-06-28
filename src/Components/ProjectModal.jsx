"use client";
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProject } from '@/app/context/ProjectContext';
function ProjectModal() {
    const route = useRouter();
    const { selected, setSelected } = useProject();
  return (
    <AnimatePresence>
        {selected && (
          <>
            {/* Overlay with opacity */}
            <motion.div
              className="fixed inset-0 bg-[#000000bd] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal content */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed inset-0 flex items-center justify-center z-50"
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-xl w-full max-w-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div layoutId={`image-${selected.id}`}>
                  <Image
                    src={selected?.images?.thumbnail}
                    alt=""
                    height={500}
                    width={500}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <div className="p-6 space-y-4">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    {selected.category}
                  </p>
                  <h2 className="text-xl font-bold">{selected.title}</h2>
                  <div className="flex gap-10">
                    <p className="text-xs font-semibold uppercase rounded bg-[#000000] text-yellow-500 cursor-pointer flex items-center px-5 py-2">
                      <a href={selected.projectLink} target="_blank">
                        Live Preview
                      </a>
                    </p>
                    <p
                      id="viewProjectDetails"
                      className="text-xs font-semibold uppercase rounded bg-[#000000] text-yellow-500 cursor-pointer flex items-center px-5 py-2"
                      onClick={() => {
                        route.push(`/portfolio/${selected._id}`);
                      }}
                    >
                      Details
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
  )
}

export default ProjectModal