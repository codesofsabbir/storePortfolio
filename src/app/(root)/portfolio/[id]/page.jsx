"use client";
import React, { useEffect, useState, use } from "react";
import GallerySlider from "@/Components/SinglePageProject/GallerySlider";
import SingleProjectDescription from "@/Components/SinglePageProject/SingleProjectDescription";
import RelatedProjects from "@/Components/SinglePageProject/RelatedProjects";

function Page({ params }) {
  const { id } = use(params);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);



  if (loading) return <div className="p-4 titleText">Loading...</div>;
  if (!project)
    return <div className="p-4 activeText">Project not found.</div>;

  return (
    <>
      <div className="p-5 md:p-0 space-y-8 bg-transparent">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <h1 className="text-xs md:text-xl font-bold activeText">{project.title}</h1>
          <p className="subTitleText text-[8px] md:text-xs capitalize flex items-center px-2 md:px-7 py-0 md:py-2 h-fit rounded-full subBoxBg w-fit border border-[#4e4e4e]">
            {project.projectType}
          </p>
        </div>
        <GallerySlider images={project.images}/>
        <SingleProjectDescription project={project}/>
        <RelatedProjects id={project._id} projectType={project.projectType}/>
      </div>
    </>
  );
}

export default Page;
