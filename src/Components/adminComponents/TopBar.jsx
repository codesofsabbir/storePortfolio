"use client";
import React, { useState } from "react";

import ThemeButton from "@/Components/themeButton";
import { usePathname } from "next/navigation";
function TopBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const pathname = usePathname();
  const pathTitleMap = {
  dashboard: "Dashboard",
  messages: "Messages",
  projects: "Projects",
  blogs: "Blogs",
  settings: "Settings",
};
   const segments = pathname.split("/").filter(Boolean);
const matchedKey = segments.find((segment) => pathTitleMap[segment]);
const capitalizedTitle = matchedKey ? pathTitleMap[matchedKey] : "Admin";
  return (
    <div className="absolute top-0 left-0 w-full h-20 flex justify-between items-center boxBg overflow-hidden">
      <div className="w-20 h-full">
        
      </div>
      <h2 className="text-2xl font-bold titleText">{capitalizedTitle}</h2>
      <div className="w-20 h-full flex justify-center items-center">
        <ThemeButton />
      </div>
    </div>
  );
}

export default TopBar;
