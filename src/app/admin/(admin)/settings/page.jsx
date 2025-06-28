"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaUpload, FaEdit, FaSave } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
const Settings = () => {
  const imageChnageRef = useRef();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/developerdetails");
        const data = await res.json();
        setDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching developer details:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = () => {
    imageChnageRef.current.click();
  };

  const handleEditClick = (field) => {
    setEditingField(field);
    setTempValue(details[field] || "");
  };

  const handleSaveField = async () => {
    const updated = { ...details, [editingField]: tempValue };
    try {
      const res = await fetch("/api/developerdetails", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        setDetails(updated);
        setEditingField(null);
      } else {
        alert("Failed to update");
      }
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  if (loading || !details) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-1 grid gap-7">
          <div className="py-5 px-10 rounded flex flex-col justify-center items-center gradientBg relative">
            <div className="mt-4 relative w-32 h-32 rounded-full overflow-hidden group">
              <Image
                src={details.profileImage}
                alt="Profile"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div
                className="w-full h-full hidden group-hover:flex justify-center items-center absolute top-0 left-0 bg-[#0000009a] transition-all duration-200 ease-in-out cursor-pointer"
                onClick={handleImageChange}
              >
                <FaUpload className="text-2xl text-white" />
                <input type="file" ref={imageChnageRef} className="hidden" />
              </div>
            </div>
            <h2 className="text-xl titleText">{details?.name}</h2>
            <h2 className="text-sm subTitleText">{details?.profession}</h2>
            <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full activeBg flex justify-center items-center cursor-pointer swapText">
              <FaPen className="text-xs" />
            </div>
          </div>
          <div className="py-5 px-10 rounded flex flex-col justify-center items-center gradientBg relative">
            <ul className="w-full flex flex-col gap-2 titleText">
              <li className="flex justify-between">
                Residence:{" "}
                <span className="subTitleText">{details?.residence}</span>
              </li>
              <li className="flex justify-between">
                City: <span className="subTitleText">{details?.city}</span>
              </li>
              <li className="flex justify-between">
                District:{" "}
                <span className="subTitleText">{details?.district}</span>
              </li>
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
                Mobile: <span className="subTitleText">{details?.mobile}</span>
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
      <button className="px-5 py-2 rounded activeBg mt-7 cursor-pointer">Save</button>
    </div>
  );
};

export default Settings;
