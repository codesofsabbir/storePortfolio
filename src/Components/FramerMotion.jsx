"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const portfolioItem = [
  {
    id: "b551",
    title: "Multipage Portfolio Design with React JS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    projectLink: "https://imsabbir.netlify.app/home",
    category: "Design",
    tags: ["HTML", "CSS", "JS", "React", "TailwindCSS"],
    images: {
      thumbnail: "https://i.ibb.co/CvrXpbB/My-Portfolio.png",
      sliderImages: [
        "https://i.ibb.co/sRWzVFg/history.png",
        "https://i.ibb.co/YLd1pSV/portfolio.png",
        "https://i.ibb.co/Vp09nhS/contact.png",
      ],
    },
  },
  {
    id: "cc2e",
    title: "Landing Page Portfolio Website",
    description:
      "This is a Landing page portfolio website built with HTML, CSS, JS, and Tailwind...",
    projectLink: "https://ilrsabbir-demoportfolio.netlify.app/",
    category: "Design",
    tags: ["HTML", "CSS", "JS", "TailwindCSS"],
    images: {
      thumbnail: "https://i.ibb.co/18F81yF/thumbnial.png",
      sliderImages: [
        "https://i.ibb.co/QkW79rs/1.png",
        "https://i.ibb.co/s3gF7Pn/2.png",
        "https://i.ibb.co/5L6qwY3/3.png",
      ],
    },
  }
];

export default function AppPage() {
  const route = useRouter();
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 gap-6">
        {portfolioItem.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelected(item)}
            className="rounded-2xl overflow-hidden cursor-pointer shadow-lg relative"
          >
            <motion.div>
              <Image 
              src={item.images.thumbnail}
              alt={item.title}
              width={500}
              height={400}
              className="w-full h-60 object-cover"
              layoutId={`image-${item.id}`}
              />
            </motion.div>
            <p className="text-xs font-semibold uppercase px-5 py-2 rounded bg-[#000000a9] text-white absolute bottom-6 right-6">{item.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
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
               <motion.div>
                <Image
                  src={selected.images.thumbnail}
                  alt=""
                  height={500}
                  width={500}
                  layoutId={`image-${selected.id}`}
                  className="w-full h-64 object-cover"
                />
               </motion.div>
                <div className="p-6 space-y-4">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    {selected.category}
                  </p>
                  <h2 className="text-xl font-bold">{selected.title}</h2>
                  <div className="flex gap-10">
                  <p className="text-yellow-500 cursor-pointer font-semibold flex items-center pt-3">
                    <a href={selected.projectLink} target="_blank">
                      Live Preview
                    </a>
                  </p>
                  <p
                    className="text-yellow-500 cursor-pointer font-semibold flex items-center pt-3"
                    onClick={() => {
                      route.push(`/portfolio/${selected.id}`);
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
    </div>
  );
}
