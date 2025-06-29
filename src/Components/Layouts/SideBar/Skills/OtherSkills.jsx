import React from "react";

function OtherSkills({others}) {
  return (
    <div className="border-b-[1px] border-[#656566] py-5 text-xs">
      <ul className="flex gap-1 flex-col">
        {others?.map((otherSkill, index) => {
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
