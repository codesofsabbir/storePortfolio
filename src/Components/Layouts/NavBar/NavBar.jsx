"use client";
import React, { useEffect, useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import NavigationMenu from "./NavigationMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeButton from "@/Components/themeButton";

gsap.registerPlugin(useGSAP);
function NavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const children = document.querySelector(".children");
    if (isNavBarOpen) {
      children.style.opacity = "0.5";
      children.style.pointerEvents = "none";
    } else {
      children.style.opacity = "1";
      children.style.pointerEvents = "all";
    }
  }, [isNavBarOpen]);
   useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) ) {
        setIsNavBarOpen(false);
      }
    }

    if (isNavBarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavBarOpen]);

  

  return (
    <div
      ref={menuRef}
      className={`${
        isNavBarOpen ? "w-[200px]" : "w-[82px]"
      } boxBg lg:flex flex-col justify-between transition-all duration-300 ease-in hidden h-full absolute right-0 top-0`}
    >
      {/* menuIcon */}
      <div className="subBoxBg w-full h-[82px]">
        <div className="w-[82px] h-[82px] flex justify-center items-center titleText">
          <Hamburger
            toggled={isNavBarOpen}
            toggle={setIsNavBarOpen}
            size={20}
            duration={0.3}
            distance="sm"
            onClick={() => {
              setIsNavBarOpen(!isNavBarOpen);
            }}
          />
        </div>
      </div>

      <NavigationMenu
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
      />

      {/* Dark and light mode icon */}
      <ThemeButton />
    </div>
  );
}

export default NavBar;
