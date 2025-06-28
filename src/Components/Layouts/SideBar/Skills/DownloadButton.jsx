import React from "react";
import { FaDownload } from "react-icons/fa";
function DownloadButton() {
  return (
    <div className="py-5 ">
      <a href="https://drive.usercontent.google.com/download?id=1wAzs1tF_LBcezRmSwo0MFwihNJWxUJYw&export=download&authuser=3&confirm=t&uuid=336f5b2a-96f1-495a-8d88-63f883dd19c2&at=AO7h07ezXuAmbsMk_yv8UDQ5Q6Wq:1726532505276">
        <button className="flex gap-2 items-center textWithHover cursor-pointer transition duration-150 text-sm">
          Download CV
          <FaDownload />
        </button>
      </a>
    </div>
  );
}

export default DownloadButton;
