"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
function Education() {
  const [educations, setEducations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/history/educations");
        const data = await response.json();
        setEducations(data);
      } catch (error) {
        console.error("Error fetching Education data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className=" text-lg font-semibold titleText">Education</h2>
      <div className="lists mt-6">
        <div className="flex flex-col gap-8 w-[85%]">
          {educations.map((education, index) => {
            return (
              <div
                key={index}
                className="w-full historyBox p-5 box"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-medium titleText text-xs md:text-base">{education.title}</h2>
                  <div className="text-[9px] md:text-xs px-2 py-1 md:px-4 md:py-2 rounded-full historyBox subTitleText">
                    <span>{education.year}</span>
                  </div>
                </div>
                <i className="text-xs activeText">{education.address}</i>
                <div className="mt-7 mb-5 flex flex-col gap-2 text-xs">
                  <h1 className="font-medium titleText">
                    Institute:{" "}
                    <span className="subTitleText">
                      {education.institute}
                    </span>
                  </h1>
                  <h1 className="font-medium titleText">
                    Department:{" "}
                    <span className="subTitleText">
                      {education.department}
                    </span>
                  </h1>
                </div>
                <Link href={""} className="activeText cursor-pointer font-semibold flex items-center text-xs w-fit">
                  <span>CERTIFICATE</span>{" "}
                  <span className="text-[18px] pl-1"> &gt;</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
