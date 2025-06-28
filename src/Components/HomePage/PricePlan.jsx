'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function PricePlan() {
  const [pricingPlans, setPricingPlans] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/packages");
          const data = await response.json();
          setPricingPlans(data);
        } catch (error) {
          console.error("Error fetching services data", error);
        }
      };
      fetchData();
    }, []);
  return (
    <div className="mt-7">
      <h2 className="titleText font-semibold text-lg">Price Plans</h2>
      <div className="w-full mt-6 grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {pricingPlans.map((plan, index) => {
          return (
            <div
              key={index}
              className="px-4 py-6 boxBg flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold titleText mb-4">
                {plan.title}
              </h2>
              <p className="text-[32px] font-semibold activeText mb-4 uppercase">
                {plan.price}
                <span className={` pl-1 ${plan.price === "custom" ? "" : "text-base font-normal subTitleText" }`}>{plan.price === "custom" ? "*" : "$"}</span>
              </p>
              <ul className="mt-5 mb-10 flex flex-col items-center gap-5">
                {plan?.services?.map((service, index) => {
                  return (
                    <li
                      key={index}
                      className={`activeText flex items-center gap-3 text-sm leading-0 ${
                        service?.included ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <h3 className="text-[10px] font-light">
                        {service.included ? (
                          <span>
                            <FaCheck />
                          </span>
                        ) : (
                          <span>
                            <FaTimes />
                          </span>
                        )}
                      </h3>

                      <span className={`subTitleText text-xs `}>
                        {service.serviceName}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={"/contact"}
                className="activeText cursor-pointer font-semibold flex items-center text-xs"
              >
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

export default PricePlan;
