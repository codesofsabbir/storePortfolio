import React from 'react';

const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JAVASCRIPT", percent: 75 },
  { name: "REACT", percent: 85 },
  { name: "NEXT", percent: 80 },
  { name: "MongoDB", percent: 75 },
  { name: "WordPress", percent: 75 },
  { name: "Blogger", percent: 80 },
];

function SkillBars({coding}) {
  return (
    <div className="border-b-[1px] border-[#656566] py-5 flex flex-col gap-4">
      {coding?.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between text-xs">
            <h3 className="titleText">{skill.title}</h3>
            <h3 className="titleText">{skill.percent}%</h3>
          </div>
          <div className="w-full h-[5px] structureBg rounded-full overflow-hidden">
            <div
              className="h-full activeBg"
              style={{ width: `${skill.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillBars;
