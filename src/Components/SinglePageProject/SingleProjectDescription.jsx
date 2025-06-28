import React from "react";
import { FaCheck } from "react-icons/fa";
import DOMPurify from "dompurify";
import dayjs from "dayjs";
function SingleProjectDescription({ project }) {
  return (
    <div className="mt-10">
      <p className="titleText text-lg mb-5">Project details</p>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:p-10 p-3 md:col-span-2 gradientBg">
          <h2 className="titleText pb-3 text-base">Description</h2>
          <div
            className="text-xs subTitleText"
            id="tinyEditorDetails"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(project.description),
            }}
          ></div>
          
          <div className="flex gap-5 items-center mt-5 pb-3 md:pb-0">
            <h2 className="font-semibold activeText text-sm hidden md:block">
              Live Link :
            </h2>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700 text-xs md:text-base"
            >
              {project.liveLink}
            </a>
          </div>
        </div>
        <div className="md:p-10 p-3 md:col-span-1 flex flex-col gap-2 text-xs gradientBg">
          <>
            <div className="flex justify-between items-center">
              <span className="font-semibold titleText">Order Date:</span>
              <span className="subTitleText">
                {project.orderDate
                  ? dayjs(project.orderDate).format("YYYY-MM-DD")
                  : "N/A"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold titleText">Final Date:</span>
              <span className="subTitleText">
                {project.completeDate
                  ? dayjs(project.completeDate).format("YYYY-MM-DD")
                  : "N/A"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold titleText">Status:</span>
              <span className="subTitleText">
                {project?.completeDate ? "Complete" : "Incomplete"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold titleText">Client:</span>
              <span className="subTitleText">{project.clientName}</span>
            </div>
          </>

          <div>
            <h2 className="titleText pt-5 text-base">Plugins</h2>
            {project?.plugins?.map((plugin) => {
              return (
                <li
                  key={plugin}
                  className="flex items-center gap-2 text-xs subTitleText"
                >
                  <span className="text-[9px] activeText">
                    <FaCheck />
                  </span>
                  {plugin}
                </li>
              );
            })}
            <h2 className="titleText pt-5 pb-3 text-base">Technologies</h2>
            <ul className="flex flex-wrap gap-1">
              {project?.technologies?.map((technologie) => {
                return (
                  <li
                    key={technologie}
                    className="subTitleText text-xs capitalize flex items-center px-2 py-1 rounded-full subBoxBg w-fit h-fit border border-[#4e4e4e]"
                  >
                    {technologie}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProjectDescription;
