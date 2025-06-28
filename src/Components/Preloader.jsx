"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Create and export the timeline
export const globalTimeline = gsap.timeline();

function Preloader() {
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    globalTimeline
      .to(".preloader", {
        width: "100%",
        duration: 1,
        delay: 0.2,
        ease: "Expo.easeInOut",
      })
      .to(".preloader", {
        height: "100vh",
        duration: 0.5,
        delay: 0.5,
        ease: "Expo.easeInOut",
      })
      .to(".topOverlay", {
        width: "100%",
        duration: 0.3,
        ease: "Expo.easeInOut",
      })
      .to(
        ".bottomOverlay",
        {
          width: "100%",
          duration: 0.3,
          ease: "Expo.easeInOut",
        },
        "<"
      )
      .to(".preloader", {
        width: "0%",
        duration: 0,
      })
      .to(".topOverlay", {
        height: "0%",
        duration: 0.5,
        ease: "Expo.easeInOut",
      })
      .to(
        ".bottomOverlay",
        {
          height: "0%",
          duration: 0.5,
          ease: "Expo.easeInOut",
        },
        "<"
      )
      .add("startPage", "+=0.1") // label for page animation to hook into
      .call(() => {
        setTimeout(() => setLoading(false), 100); // safely use setLoading here
      });
  }, []);

  return (
    <div
      className={`preloaderMain absolute top-0 left-0 z-50 w-full  overflow-hidden transition-opacity duration-700 ${
        loading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full h-screen flex items-center bg-[#191923]">
        <div className="preloader h-[2px] bg-[#FFC107] z-10"></div>
        <div className="preloaderOverlay absolute top-0 left-0 h-full w-full flex flex-col z-20">
          <div className="h-full w-full relative">
            <div className="topOverlay h-1/2 w-0 absolute left-0 top-0 bg-[#EEE3CB]"></div>
            <div className="bottomOverlay h-1/2 w-0 absolute right-0 bottom-0 bg-[#EEE3CB]"></div>
          </div>
        </div>
        <div className="preloaderOverlay2 h-screen w-0 bg-[#191923] absolute left-0 top-0 z-30"></div>
      </div>
    </div>
  );
}

export default Preloader;
