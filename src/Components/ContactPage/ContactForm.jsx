"use client";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      package: formData.get("package"),
    };

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Message sent:", data);
        alert("Form submitted successfully!");
        e.target.reset();
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Submission failed.");
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold titleText mt-16">Get In Touch</h2>
      <div className="map w-full h-96 mt-5 relative">
        <div className="w-full md:w-96 h-fit pb-5 boxBg contact-form md:absolute md:-top-14 md:right-10 rounded">
          <form className="p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="flex w-full">
              <div className="flex w-16 h-12 justify-center items-center subBoxBg text-lg activeText">
                <IoPersonSharp />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-3 py-2 font-medium text-base subtitleText subBoxBg border subBoxBorder outline-none"
              />
            </div>
            {/* Email Input */}
            <div className="flex w-full">
              <div className="flex w-16 h-12 justify-center items-center subBoxBg text-lg activeText">
                <MdOutlineAlternateEmail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 font-medium text-base subtitleText subBoxBg border subBoxBorder outline-none"
              />
            </div>

            {/* Service Select */}
            <div className="flex flex-col gap-1">
              <select
                name="service"
                required
                className="w-full px-3 py-2 font-medium text-base subTitleText subBoxBg border subBoxBorder outline-none"
              >
                <option value="">Choose Service</option>
                <option value="Front-end Development">Front-end Development</option>
                <option value="WordPress Services">WordPress Services</option>
                <option value="Blogger Services">Blogger Services</option>
                <option value="Redesign and Updates">Redesign and Updates</option>
                <option value="Microsoft Office Services">Microsoft Office Services</option>
              </select>
            </div>

            {/* Package Select */}
            <div className="flex flex-col gap-1">
              <select
                name="package"
                required
                className="w-full px-3 py-2 font-medium text-base subTitleText subBoxBg border subBoxBorder outline-none"
              >
                <option value="">Choose Package</option>
                <option value="Project Base">Project Base</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>

            <button
              type="submit"
              className="py-3 px-5 activeBg text-[#20202a] text-[11px] font-semibold cursor-pointer w-fit rounded"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
