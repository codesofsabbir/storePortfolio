'use client'
import Accomplishments from "@/Components/Accomplishments";
import Banner from "@/Components/HomePage/Banner";
import PricePlan from "@/Components/HomePage/PricePlan";
import Services from "@/Components/HomePage/Services";
import React from "react";

function page() {
  return (
    <div>
      <Banner />
      <Accomplishments />
      <Services />
      <PricePlan />
    </div>
  );
}

export default page;
