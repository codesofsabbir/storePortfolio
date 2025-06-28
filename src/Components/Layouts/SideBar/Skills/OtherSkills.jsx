import React from "react";

function OtherSkills({softSkills}) {
  const otherSkills = [
    "TailwindCss, SCSS, BootStrap",
    "GSAP, Framer Motion, Socket.io",
    "Authentication, Payment Method",
    "Git Knowladge, Vitest, npm",
    "Word, Excle, PowerPoint, Access",
    "PhotoShop",
  ];
  return (
    <div className="border-b-[1px] border-[#656566] py-5 text-xs">
      <ul className="flex gap-1 flex-col">
        {softSkills?.map((otherSkill, index) => {
          return (
            <ol className="activeText" key={index}>
              <span className="subTitleText">{otherSkill}</span>
            </ol>
          );
        })}
      </ul>
    </div>
  );
}

export default OtherSkills;
