"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Language({languages}) {
  const [isDark, setIsDark] = useState();
  useEffect(()=>{
    const checkDarkMode = () => {
      setIsDark(document.body.classList.contains("dark"));
    };

    // Run on mount
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Clean up
    return () => observer.disconnect();
  }, []);
  console.log(
    "Developer data get from mongodb and console from ",
    languages
  );

  return (
    <div className="border-b-[1px] border-[#656566] py-5 flex gap-2 justify-around">
      {languages?.map((lang, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 justify-center"
        >
          <CircularProgressbar
            value={lang.percent}
            text={`${lang.percent}%`}
            styles={buildStyles({
              textColor: isDark ? "#fafafc" : "#181816",
              pathColor: isDark ? "#ffc107" : "#c74d4d",
              trailColor: isDark ? "#2c2c38" : "#2c2c38",
            })}
          />
          <p className="titleText text-xs capitalize">{lang.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Language;
