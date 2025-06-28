'use client'
import React, { useEffect, useState } from "react";

function page() {
    const [details, setDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/developerdetails");
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching developer details:", error);
      }
    };
    fetchData();
  });
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-2 grid gap-7">
          <div className="grid grid-cols-2 gap-7">
            <div className="py-5 px-10 rounded flex flex-col justify-center items-center gradientBg relative">
              <ul className="w-full flex flex-col gap-2 titleText">
                {details?.skills?.language.map((lang, index) => {
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
                <li className="flex justify-between ">
                  Email: <span className="subTitleText">{details?.email}</span>
                </li>
                <li className="flex justify-between">
                  Mobile:{" "}
                  <span className="subTitleText">{details?.mobile}</span>
                </li>
                <li className="flex justify-between">
                  whatsapp:{" "}
                  <span className="subTitleText">{details?.whatsapp}</span>
                </li>
                <li className="flex justify-between">
                  Telegram:{" "}
                  <span className="subTitleText">{details?.telegram}</span>
                </li>
              </ul>
              <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full activeBg flex justify-center items-center cursor-pointer swapText">
                <FaPen className="text-xs" />
              </div>
            </div>
          </div>
          <div className="py-5 px-10 rounded flex flex-col justify-center items-center gradientBg relative">
            <ul className="w-full flex flex-col gap-2 titleText">
              {details?.skills?.coding.map((tech, index) => {
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
      </div>
      <button className="px-5 py-2 rounded activeBg mt-7 cursor-pointer">
        Save
      </button>
    </div>
  );
}

export default page;
