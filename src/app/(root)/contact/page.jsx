'use client'
import ContactForm from "@/Components/ContactPage/ContactForm";
import PersonalInfo from "@/Components/ContactPage/PersonalInfo";
import React from "react";

function page() {
  return (
    <div className="p-5 md:p-0">
      <PersonalInfo />
      <ContactForm />
    </div>
  );
}

export default page;
