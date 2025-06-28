"use client";
import React, { useState } from "react";
import MultipleSelected from "../../Components/MultipleSelected";
import BasicDatePicker from "../../Components/DatePicker";
import MultipleImageUpload from "../../Components/MultipleImageUpload";
import TinyEditor from "../../Components/TinyEditor";
import SingleSelected from "../../Components/SingleSelected";

const technologies = [
  "Html",
  "CSS",
  "JavaScript",
  "JQuery",
  "Bootstrap",
  "SCSS",
  "tailwindCss",
  "React",
  "Next",
  "Node",
  "Express",
  "MongoDB",
];
const plugins = [
  "Google Font",
  "React Icon",
  "MUI",
  "shadcn",
  "Smooth ScrollBar",
  "Framer Motion",
  "GSAP",
  "LightBox",
  "FancyBox",
  "Formik",
  "Yup",
  "React Hook Fomr",
  "Redux",
  "Anime.js",
  "Lottie",
  "Socket.IO",
  "WebSocket API",
  "Next API Route",
  "Pusher",
  "WebRTC",
  "Simple Peer",
  "Agora.io",
  "Twilio Programmable Video",
  "Jitsi Meet",
  "Stripe",
  "PayPal",
  "Bkash API",
  "Nagod Merchant API",
];
const projectTypes = ["Design", "Development", "WordPress", "Blogger"];

const initialForm = {
  title: "",
  description: "",
  liveLink: "",
  clientName: "",
  features: [],
  technologies: [],
  plugins: [],
  projectType: "",
  orderDate: null,
  completeDate: null,
  images: [],
};

function Page() {
  const [formData, setFormData] = useState(initialForm);
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const imgbbAPIKey = "6ad1958c294b93229c443eb0b10d8673";

  const updateForm = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!selectedImages.length) return alert("Please select images!");

    setUploading(true);
    const uploadedUrls = [];

    for (const file of selectedImages) {
      const imageData = new FormData();
      imageData.append("image", file);

      try {
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
          {
            method: "POST",
            body: imageData,
          }
        );
        const result = await res.json();
        if (result.success) {
          uploadedUrls.push(result.data.url);
        } else {
          console.error("Image upload failed:", result);
        }
      } catch (err) {
        console.error("Upload error:", err);
      }
    }

    setUploading(false);

    const finalData = { ...formData, images: uploadedUrls };

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) {
        const errRes = await res.json();
        throw new Error(errRes.message || "Submission failed");
      }

      const result = await res.json();
      console.log("Project created:", result);

      alert("Project submitted successfully!");
      setFormData(initialForm);
      setSelectedImages([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed: " + error.message);
    }
  };

  return (
    <div>
      <h2 className="text-lg titleText">Add New Project</h2>
      <div className="grid grid-cols-6 gap-14 mt-5">
        <div className="col-span-4">
          <input
            name="title"
            value={formData.title}
            placeholder="Project Name"
            onChange={(e) => updateForm(e.target.name, e.target.value)}
            className="gradientBg w-full subTitleText font-thin rounded px-4 outline-none py-2"
          />
          <TinyEditor
            value={formData.description}
            onEditorChange={(val) => updateForm("description", val)}
          />
          <MultipleImageUpload onFilesChange={setSelectedImages} />
        </div>

        <div className="col-span-2">
          <div className="gradientBg shadow-lg p-7 rounded flex flex-col gap-3">
            <div className="flex gap-3 mb-3">
              <button
                onClick={handleSave}
                disabled={uploading}
                className="activeBg px-3 py-1.5 rounded"
              >
                {uploading ? "Uploading..." : "Save"}
              </button>
              <button className="activeBg px-3 py-1.5 rounded">Cancel</button>
            </div>
            <input
              name="liveLink"
              value={formData.liveLink}
              placeholder="Project Link"
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              className="subBoxBg w-full subTitleText font-thin rounded px-4 outline-none py-2"
            />
            <MultipleSelected
              names={technologies}
              tag="Technologies"
              selectedValues={formData.technologies}
              onChange={(val) => updateForm("technologies", val)}
            />
            <MultipleSelected
              names={plugins}
              tag="Plugins"
              selectedValues={formData.plugins}
              onChange={(val) => updateForm("plugins", val)}
            />
            <SingleSelected
              names={projectTypes}
              tag="Project Type"
              value={formData.projectType}
              onChange={(val) => updateForm("projectType", val)}
            />
          </div>

          <div className="gradientBg shadow-lg p-7 rounded mt-5">
            <input
              name="clientName"
              placeholder="Client Name"
              value={formData.clientName}
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              className="subBoxBg w-full subTitleText font-thin rounded px-4 outline-none py-2"
            />
            <BasicDatePicker
              tag="Order Date"
              name="orderDate"
              value={formData.orderDate}
              onChange={(name, val) => updateForm(name, val)}
            />
            <BasicDatePicker
              tag="Complete Date"
              name="completeDate"
              value={formData.completeDate}
              onChange={(name, val) => updateForm(name, val)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
