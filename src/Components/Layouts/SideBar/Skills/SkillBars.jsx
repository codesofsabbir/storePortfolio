import React from 'react';

function SkillBars({technologies}) {
  return (
    <div className="border-b-[1px] border-[#656566] py-5 flex flex-col gap-4">
      {technologies?.map((skill, index) => (
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
