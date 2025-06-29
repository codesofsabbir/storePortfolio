"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import MultipleSelected from "../../../../../../Components/adminComponents/MultipleSelected";
import BasicDatePicker from "../../../../../../Components/adminComponents/DatePicker";
import MultipleImageUpload from "../../../../../../Components/adminComponents/MultipleImageUpload";
import TinyEditor from "../../../../../../Components/adminComponents/TinyEditor";
import SingleSelected from "../../../../../../Components/adminComponents/SingleSelected";
import dayjs from "dayjs";
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
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const params = useParams(); // gets id from URL
  const { id } = params;
  const [existingImages, setExistingImages] = useState([]);

  const imgbbAPIKey = "6ad1958c294b93229c443eb0b10d8673";

  useEffect(() => {
    if (id) {
      fetch(`/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const parsedData = {
            ...data,
            orderDate: data.orderDate ? dayjs(data.orderDate) : null,
            completeDate: data.completeDate ? dayjs(data.completeDate) : null,
          };
          setFormData(parsedData);
          setExistingImages(data.images || []); // ✅ FIX HERE
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading project:", err);
          setLoading(false);
        });
    }
  }, [id]);

  const updateForm = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleUpdate = async () => {
    let imageUrls = [...existingImages]; // start with current images

    if (selectedImages.length) {
      setUploading(true);
      const uploaded = [];

      for (const file of selectedImages) {
        const form = new FormData();
        form.append("image", file);
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
          {
            method: "POST",
            body: form,
          }
        );
        const result = await res.json();
        if (result.success) uploaded.push(result.data.url);
      }

      imageUrls = [...imageUrls, ...uploaded]; // keep existing, add new
      setUploading(false);
    }

    const updatedData = {
      ...formData,
      projectLink: formData.liveLink, // if needed
      images: imageUrls,
    };

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) throw new Error("Failed to update");

      alert("Project updated successfully!");
      router.push("/admin/projects");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed");
    }
  };

  if (loading) return <p className="titleText text-center mt-10">Loading...</p>;

  return (
    <div>
      <h2 className="text-lg titleText">Edit Project</h2>
      <div className="grid grid-cols-6 gap-14 mt-5">
        <div className="col-span-4">
          <input
            name="title"
            value={formData.title}
            onChange={(e) => updateForm(e.target.name, e.target.value)}
            placeholder="Project Name"
            className="gradientBg w-full subTitleText font-thin rounded px-4 outline-none py-2"
          />
          <TinyEditor
            value={formData.description}
            onEditorChange={(val) => updateForm("description", val)}
          />
          <MultipleImageUpload
            existingImages={existingImages}
            onFilesChange={setSelectedImages}
            onExistingImageDelete={(url) =>
              setExistingImages((prev) => prev.filter((img) => img !== url))
            }
          />
        </div>

        <div className="col-span-2">
          <div className="gradientBg shadow-lg p-7 rounded flex flex-col gap-3">
            <div className="flex gap-3 mb-3">
              <button
                onClick={handleUpdate}
                disabled={uploading}
                className="activeBg px-3 py-1.5 rounded"
              >
                {uploading ? "Updating..." : "Update"}
              </button>
              <button
                className="activeBg px-3 py-1.5 rounded"
                onClick={() => router.push("/admin/projects")}
              >
                Cancel
              </button>
            </div>
            <input
              name="liveLink"
              value={formData.liveLink}
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              placeholder="Project Link"
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
              value={formData.clientName}
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              placeholder="Client Name"
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
