"use client"; // if you're using Next.js App Router

import React from "react";
import Address from "./Address";
import OtherSkills from "./OtherSkills";
import DownloadButton from "./DownloadButton";
import SkillBars from "./SkillBars";
import Language from "./Language";
import { Scrollbar } from "smooth-scrollbar-react";

function Skills({skills, residence, city, district}) {
  
  return (
    <Scrollbar
      className="hide-scrollbar"
      plugins={{
        overscroll: {
          effect: "bounce",
        },
      }}
      damping={0.05}
      thumbMaxSize={20}
      renderByPixels={true}
      alwaysShowTracks={false}
      continuousScrolling={true}
    >
      <div className="px-6 pt-5 h-[62%]">
        <Address residence={residence} city={city} district={district}/>
        <Language languages={skills?.language} />
        <SkillBars coding={skills?.coding} />
        <OtherSkills softSkills={skills?.softSkills} />
        <DownloadButton />
      </div>
    </Scrollbar>
  );
}

export default Skills;
