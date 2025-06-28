'use client'
import Education from "@/Components/HistoryPage/Education";
import Work from "@/Components/HistoryPage/Work";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-0">
      <Education />
      <Work />
      
    </div>
  );
}

export default page;
