"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-7">
      <h2 className="text-base titleText font-semibold ">My Services</h2>
      <div className="w-full mt-6 grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {services.map((service) => {
          return (
            <div key={service._id} className="px-4 py-6 gradientBg">
              <h2 className="text-sm font-semibold titleText mb-4">
                {service.title}
              </h2>
              <ul className="mb-4">
                {service.details.map((li, index) => {
                  return (
                    <ol key={index} className="activeText">
                      <span className="subTitleText text-xs">{li}</span>
                    </ol>
                  );
                })}
              </ul>
              <Link href={"/contact"} className="activeText cursor-pointer font-semibold flex items-center text-xs">
                <span>ORDER NOW</span>{" "}
                <span className="text-[18px] pl-1"> &gt;</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
