"use client";
import Image from "next/image";
import DOMPurify from "dompurify";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
function ProjectItem({ filterWith }) {
  const [portfolioItem, setPortfolioItem] = useState([]);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [projectrow, setProjectrow] = useState(2);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        const projects = await response.json();
        setPortfolioItem(projects);
      } catch (error) {
        console.error("Error fetching doctors data", error);
      }
    };
    fetchData();
  }, []);
  const filteredPortfolio = useMemo(() => {
    if (filterWith === "all") return portfolioItem;
    return portfolioItem.filter(
      (portfolio) => portfolio.projectType.toLowerCase() === filterWith
    );
  }, [portfolioItem, filterWith]);

  useEffect(() => {
    const projectShowPerClick = 2;
    const lastProjectIndex = projectrow * projectShowPerClick;
    const firstProjectIndex = 0;
    setCurrentProjects(
      filteredPortfolio.slice(firstProjectIndex, lastProjectIndex)
    );
  }, [projectrow, filteredPortfolio]);
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {currentProjects.map((currentProject) => {
          return (
            <motion.div
              key={currentProject._id}
              layoutId={`card-${currentProject._id}`}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-lg relative h-64 group "
            >
              <Image
                src={currentProject.images[0]}
                alt={currentProject.title}
                width={800}
                height={800}
                className="w-full h-full object-cover object-center"
              />

              <div className="w-full h-2/3 boxBg absolute -bottom-full left-0 group-hover:-bottom-0 px-5 py-2 transition-all duration-500 ease-in">
                <p className="text-[9px] md:text-xs uppercase titleText">
                  {currentProject.projectType}
                </p>
                <h2 className="text-sm md:text-lg activeText py-2">
                  {currentProject.title}
                </h2>
                <div
                  className="text-xs subTitleText"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      currentProject.description.length > 150
                        ? currentProject.description.slice(0, 150) + "..."
                        : currentProject.description
                    ),
                  }}
                ></div>

                <Link
                  href={`/portfolio/${currentProject._id}`}
                  className="activeText cursor-pointer font-semibold flex items-center text-[10px] md:text-xs"
                >
                  <span>Read More</span>{" "}
                  <span className="text-[18px] pl-1"> &gt;</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full flex justify-center pt-10">
        {projectrow * 3 < portfolioItem.length && (
          <button
            className="py-2 px-5 bg-[#FFC107] text-[#20202a] text-[11px] cursor-pointer font-semibold"
            onClick={() => setProjectrow(projectrow + 1)}
          >
            MORE
          </button>
        )}
      </div>
    </>
  );
}

export default ProjectItem;
