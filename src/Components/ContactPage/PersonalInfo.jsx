import React from "react";
import { motion } from "framer-motion";
function PersonalInfo() {
  const title = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
  };
  const item1 = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  const item2 = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.7,
      },
    },
  };
  const item3 = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.9,
      },
    },
  };
  const infoSections = [
    {
      title: "Location",
      items: [
        { label: "Country:", value: "Bangladesh" },
        { label: "City:", value: "Dhaka" },
        { label: "District:", value: "Narayanganj" },
      ],
      animation: "item1",
    },
    {
      title: "Contact",
      items: [
        {
          label: "Facebook:",
          value: "sabbirahammad.mridul",
          link: "https://www.facebook.com/sabbirahammad.mridul",
        },
        {
          label: "Instagram:",
          value: "im.sabbir_",
          link: "https://www.instagram.com/im.sabbir_/",
        },
        {
          label: "LinkedIn:",
          value: "imsabbir",
          link: "https://www.linkedin.com/in/imsabbir/",
        },
      ],
      animation: "item2",
    },
    {
      title: "Phone",
      items: [
        { label: "Email:", value: "imsabbiir@gmail.com" },
        { label: "Whatsapp:", value: "01326650567" },
        { label: "Telegram:", value: "01326650567" },
      ],
      animation: "item3",
    },
  ];
  return (
    <div className="text-xs font-thin">
      <h2
        variants={title}
        initial="hidden"
        animate="visible"
        className="text-lg font-semibold titleText"
      >
        Contact
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {infoSections.map((section, index) => (
          <div
            key={index}
            variants={section.animation}
            initial="hidden"
            animate="visible"
            className="w-full boxBg py-10 px-5 flex flex-col gap-1"
          >
            {section.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <h2 className="text-[13px] font-medium titleText">
                  {item.label}
                </h2>
                <a href={item?.link} target="_blank" rel="noopener noreferrer">
                  <h2 className={`${item?.link ? "text-blue-500 hover:underline" : "defaultText"}`}>{item.value}</h2>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalInfo;
