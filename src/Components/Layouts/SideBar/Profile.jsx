"use client";
import Image from "next/image";
import React, { useState } from "react";
import Me from "@/media/me.png";
import { TbZoomScan } from "react-icons/tb";
import ProfileModal from "@/Components/ProfileModal";
function Profile({ loading, profileSrc, name, profession }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      {!loading && (
        <div className="subBoxBg flex flex-col justify-center items-center h-[32%] w-full">
          <div className="w-24 h-24 rounded-full relative cursor-pointer">
            <div className="group relative w-24 h-24 rounded-full overflow-hidden">
              {/* Zoom Icon Overlay */}
              <div
                className="absolute inset-0 bg-[#2b2b2b86] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                onClick={() => setIsZoomed(true)}
              >
                <TbZoomScan className="text-[22px] text-white" />
              </div>

              {/* Profile Image */}

              {profileSrc ? (
                <Image
                  src={profileSrc}
                  alt="name"
                  width={96}
                  height={96}
                  className="object-cover w-24 h-24 rounded-full"
                />
              ) : (
                ""
              )}
            </div>

            <div className="relative">
              <div className="w-4 h-4 bg-emerald-600 flex justify-center items-center rounded-full absolute bottom-1 right-[12%] z-10 group">
                <span className="inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <div className="absolute -bottom-[15px] -right-[30px] group-hover:-right-[15px] group-hover:-bottom-[15px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="custom-dot"></div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="textWithHover font-semibold cursor-pointer mt-2">
            {name}
          </h1>
          <span className="text-xs font-thin subTitleText">{profession}</span>
        </div>
      )}
      <ProfileModal
        isZoomed={isZoomed}
        setIsZoomed={setIsZoomed}
        modal={profileSrc}
      />
    </>
  );
}

export default Profile;
