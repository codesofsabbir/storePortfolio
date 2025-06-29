"use client";
import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";

function page() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/skills");
        const data = await response.json();
        setSkills(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-7">
        <div className="grid gap-7">
          <div className="py-5 px-10 rounded flex flex-col justify-center items-center gradientBg relative">
            <ul className="w-full flex flex-col gap-2 titleText">
              {skills?.languages?.map((lang, index) => {
                return (
                  <li className="flex justify-between" key={index}>
                    {lang?.title}:{" "}
                    <span className="subTitleText">{lang?.percent}</span>
                  </li>
                );
              })}
            </ul>
            <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full activeBg flex justify-center items-center cursor-pointer swapText">
              <FaPen className="text-xs" />
            </div>
          </div>
          <div className="py-5 px-10 rounded flex flex-col justify-center items-center gradientBg relative">
            <ul className="w-full flex flex-col gap-2 titleText">
              {skills?.technologies?.map((tech, index) => {
                return (
                  <li className="flex justify-between" key={index}>
                    {tech?.title}:{" "}
                    <span className="subTitleText">{tech?.percent}</span>
                  </li>
                );
              })}
            </ul>
            <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full activeBg flex justify-center items-center cursor-pointer swapText">
              <FaPen className="text-xs" />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="py-5 px-10 rounded flex flex-col justify-center items-center gradientBg relative">
            <ul className="w-full flex flex-col gap-2 titleText">
              {skills?.others?.map((other, index) => {
                return (
                  <li className="flex justify-between" key={index}>
                    {other}
                  </li>
                );
              })}
            </ul>
            <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full activeBg flex justify-center items-center cursor-pointer swapText">
              <FaPen className="text-xs" />
            </div>
          </div>
        </div>
      </div>
      <button className="px-5 py-2 rounded activeBg mt-7 cursor-pointer">
        Save
      </button>
    </div>
  );
}

export default page;
