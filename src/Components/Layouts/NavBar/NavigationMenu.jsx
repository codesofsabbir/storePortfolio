"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
function NavigationMenu({ isNavBarOpen, setIsNavBarOpen }) {
  const pathname = usePathname();
  const pathSegment = pathname === "/" ? "home" : pathname.split("/")[1];

  const displayName =
    {
      home: "home",
      history: "history",
      portfolio: "portfolio",
      blogs: "blogs",
      contact: "contact",
    }[pathSegment] || "";

  const menuItems = [
    { menu: "home", link: "/" },
    { menu: "history", link: "/history" },
    { menu: "portfolio", link: "/portfolio" },
    { menu: "blogs", link: "/blogs" },
    { menu: "contact", link: "/contact" },
  ];
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute top-10 ${
          isNavBarOpen ? "-left-5" : "left-1/2"
        } -translate-x-1/2 rotate-90 subTitleText text-sm transition-all duration-500 delay-200 ease-in-out`}
      >
        <span className="capitalize hidden lg:block">{displayName}</span>
      </div>
      <ul
        className={`w-full absolute top-1/2 -translate-y-1/2 capitalize flex flex-col gap-2 text-white text-sm font-thin duration-500 transition-all ease-in-out ${
          isNavBarOpen ? "left-7" : "left-28"
        }`}
      >
        {menuItems.map((nav, index) => {
          const isActive =
            nav.link === "/" ? pathname === "/" : pathname.startsWith(nav.link);
          return (
            <li key={index}>
              <Link
                href={nav.link}
                onClick={() => setIsNavBarOpen(!isNavBarOpen)}
                className={`transition-colors duration-300 ${
                  isActive ? "activeText font-semibold" : "titleText"
                }`}
              >
                {nav.menu}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavigationMenu;
