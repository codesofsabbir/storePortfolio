'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
function RelatedProjects({ id, projectType }) {
    const [relatedProjects, setRelatedProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        const projects = await response.json();
        const filteredProjects = projects
        .filter((project) => project._id !== id)
        .filter((project) => project.projectType === projectType);
        setRelatedProjects(filteredProjects.slice(0, 3));
      } catch (error) {
        console.error("Error fetching doctors data", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="mt-10">
      <p className="titleText text-lg mb-5">Related Projects</p>
      <div className="grid md:grid-cols-3 gap-5">
        {relatedProjects?.map((relatedProject) => {
          return (
            <motion.div
              key={relatedProject._id}
              layoutId={`card-${relatedProject._id}`}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-lg relative h-64 group "
            >
              <Image
                src={relatedProject.images[0]}
                alt={relatedProject.title}
                width={800}
                height={800}
                className="w-full h-full object-cover object-center"
              />

              <div
                className="w-full h-2/3 absolute -bottom-full left-0 group-hover:-bottom-0 px-5 py-2 transition-all duration-500 ease-in gradientBg"
                
              >
                <h2 className="text-sm activeText py-2">{relatedProject.title}</h2>
                <p className="text-xs text-justify subTitleText mb-1">
                  {relatedProject.description.length > 150
                    ? relatedProject.description.slice(0, 150) + "..."
                    : relatedProject.description}
                </p>
                <Link
                  href={`/portfolio/${relatedProject._id}`}
                  className="activeText cursor-pointer font-semibold flex items-center text-xs"
                >
                  <span>Read More</span>{" "}
                  <span className="text-[18px] pl-1"> &gt;</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProjects;
