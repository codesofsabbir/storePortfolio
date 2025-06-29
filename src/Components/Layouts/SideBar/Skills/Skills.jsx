"use client";

import React, { useEffect, useState } from "react";
import Address from "./Address";
import OtherSkills from "./OtherSkills";
import DownloadButton from "./DownloadButton";
import SkillBars from "./SkillBars";
import Language from "./Language";
import { Scrollbar } from "smooth-scrollbar-react";

function Skills({residence, city, district}) {
  const [skills, setSkills] = useState({})
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/skills");
          const data = await response.json();
          setSkills(Array.isArray(data) ? data[0] : data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
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
        <Language languages={skills?.languages} />
        <SkillBars technologies={skills?.technologies} />
        <OtherSkills others={skills?.others} />
        <DownloadButton />
      </div>
    </Scrollbar>
  );
}

export default Skills;
