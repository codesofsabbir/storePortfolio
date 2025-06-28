"use client";
import Accomplishments from "@/Components/Accomplishments";
import ContactBanner from "@/Components/portfolio/ContactBanner";
import NavButton from "@/Components/portfolio/NavButton";
import ProjectItem from "@/Components/portfolio/ProjectItem";
import Review from "@/Components/portfolio/Review";
import React, { useState } from "react";
function page() {
  const [filterWith, setFilterWith] = useState("all");

  return (
    <div className="p-5">
      <NavButton filterWith={filterWith} setFilterWith={setFilterWith} />
      <ProjectItem filterWith={filterWith} />
      <Review />
      <Accomplishments />
      <ContactBanner />
    </div>
  );
}

export default page;
