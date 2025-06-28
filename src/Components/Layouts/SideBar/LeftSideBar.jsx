"use client";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Skills from "./Skills/Skills";
import SocialIcon from "./SocialIcon";
function LeftSideBar() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/developerdetails");
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div
      className={`sideBar boxBg static left-0 h-full lg:flex flex-col justify-between w-[290px] flex-shrink-0 transition-all duration-500 ease-in-out hidden`}
    >
      <Profile
        profileSrc={details?.profileImage} name={details?.name} profession={details?.profession} 
      />
      <Skills skills={details?.skills} residence={details?.residence} city={details?.city} district={details?.district}/>
      <SocialIcon instagram={details?.instagram} facebook={details?.facebook} twitter={details?.twitter} linkedin={details?.linkedin}/>
    </div>
  );
}

export default LeftSideBar;
