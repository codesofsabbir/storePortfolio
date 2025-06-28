"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdDesignServices } from "react-icons/md";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { RiFolder3Fill } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

const data = [
  { title: "Dashboard", icon: <MdDashboard />, link: "dashboard", dropdown: [] },
  { title: "Messages", icon: <FiMessageSquare />, link: "messages", dropdown: [] },
  {
    title: "Projects",
    icon: <RiFolder3Fill />,
    link: "projects",
    dropdown: [{ title: "Add New", icon: <IoMdAddCircleOutline />, link: "" }],
  },
  {
    title: "Blogs",
    icon: <FaRegNewspaper />,
    link: "blogs",
    dropdown: [{ title: "Add New", icon: <IoMdAddCircleOutline />, link: "settings" }],
  },
  { title: "Settings", icon: <FiSettings />, link: "settings", dropdown: [] },
];

function AdminNavBar() {
  const pathname = usePathname();

  return (
    <div className="w-20 h-full boxBg shadow-lg flex flex-col items-center py-6 space-y-6 justify-center absolute left-0 top-0 z-40">
      {data.map((dt, index) => {
        const isActive = pathname.includes(`/admin/${dt.link}`);

        return (
          <Link
            key={index}
            href={`/admin/${dt.link}`}
            className={`group relative flex justify-center items-center h-12 w-12 rounded-xl transition duration-200 ${
              isActive
                ? "activeBg text-[#1e1e28]"
                : "titleText hover:text-white bgHover"
            }`}
          >
            {dt.icon}

            {/* Tooltip */}
            <span className="absolute pointer-events-none left-20 top-1/2 -translate-y-1/2 whitespace-nowrap swapBg swapText text-base px-5 py-2 rounded-md opacity-0 group-hover:left-16 group-hover:opacity-100 transition-all duration-200 ease-in z-10 after:content-[''] after:absolute after:w-4 after:h-4 after after:rotate-45 after:-left-1 after:-translate-y-1/2 after:top-1/2 ">
              {dt.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default AdminNavBar;
