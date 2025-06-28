"use client";
import React, { useEffect, useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import NavigationMenu from "./NavigationMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeButton from "@/Components/themeButton";

gsap.registerPlugin(useGSAP);
function MobileNavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const mobileNavBarIcon = document.querySelector("#mobileNavBarIcon");
    if (mobileNavBarIcon) {
      mobileNavBarIcon.addEventListener("click", () => {
        
      });
    }
  }, []);
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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      className={`w-[200px] h-full boxBg lg:hidden flex flex-col justify-between transition-all duration-300 ease-in absolute ${
        isNavBarOpen ? "right-0" : "-right-[200px]"
      } top-0 z-10`}
    >
      <div className="w-full relative">
        <div
          className={`w-20 h-20 flex justify-center items-center absolute ${
            isNavBarOpen ? "left-0" : "-left-20"
          } top-0 z-10 transition-all duration-500 subTitleText`}
        >
          <Hamburger
            id="mobileNavBarIcon"
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

export default MobileNavBar;
