'use client'
import NavBar from "@/Components/Layouts/NavBar/NavBar";
import LeftSideBar from "@/Components/Layouts/SideBar/LeftSideBar";
import React, { useEffect, useState } from "react";
import Children from "@/Components/Layouts/Main/Children";
import ProfileModal from "@/Components/ProfileModal";
import MobileNavLayout from "@/Components/MobileNavLayout";
import Preloader from "@/Components/Preloader";
import MobileNavBar from "@/Components/Layouts/NavBar/MobileNavBar";
import MobileSideBar from "@/Components/Layouts/SideBar/MobileSideBar";

function Layout({ children }) {
  
  return (
    <div className="w-full h-screen overflow-hidden relative mainBg">
      {/* Preloader */}
      <Preloader />

      {/* Main Content */}
      <MobileNavLayout />
      <MobileNavBar />
      <MobileSideBar />
      <div
        className={`transition-opacity duration-700 opacity-100 pointer-events-auto w-full h-screen`}
      >
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center ">
          <div className="h-[calc(100vh-30px)] w-[calc(100%-30px)] containerBg flex justify-between overflow-hidden relative content">
            <LeftSideBar />
            <Children>{children}</Children>
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
