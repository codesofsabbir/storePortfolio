"use client";
import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import Skills from "./Skills/Skills";
import SocialIcon from "./SocialIcon";
import { HiDotsVertical } from "react-icons/hi";
function MobileSideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sideRef = useRef(null);
  useEffect(() => {
    const children = document.querySelector(".children");
    if (sideBarOpen) {
      children.style.opacity = "0.5";
      children.style.pointerEvents = "none";
    } else {
      children.style.opacity = "1";
      children.style.pointerEvents = "all";
    }
  }, [sideBarOpen]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (sideRef.current && !sideRef.current.contains(event.target)) {
        setSideBarOpen(false);
      }
    }

    if (sideBarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarOpen]);
  return (
    <div
      ref={sideRef}
      className={`absolute top-0 w-[290px] z-20 transition-all duration-500 ${
        sideBarOpen ? "left-0" : "-left-[80%]"
      }`}
    >
      <div
        className={`h-20 w-20 flex justify-center items-center transition-all duration-500 ease-in-out cursor-pointer absolute ${
          sideBarOpen ? "right-0" : "-right-20"
        } z-30`}
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <HiDotsVertical className="subTitleText" />
      </div>
      <div className={`boxBg w-full h-screen lg:hidden`}>
        <Profile />
        <Skills />
        <SocialIcon />
      </div>
    </div>
  );
}

export default MobileSideBar;
