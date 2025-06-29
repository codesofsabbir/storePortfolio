"use client";
import React, { useEffect, useState } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
function page() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/messages");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(messages);

  return (
    <div className="w-full h-full grid grid-cols-3 overflow-hidden">
      <div className="col-span-1 flex flex-col gap-5 overflow-auto">
        <Scrollbar
          className="hide-scrollbar flex flex-col gap-3"
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
          {messages?.map((message) => {
            return (
              <div
                className="px-5 py-2 gradientBg rounded flex items-center gap-5"
                key={message._id}
              >
                <div className="w-10 h-10 rounded-full activeBg flex justify-center items-center text-lg font-semibold uppercase swapText">
                  {message?.name.slice(0, 2)}
                </div>
                <div className="h-fit mt-2 box-border">
                  <h3 className="titleText text-lg font-thin leading-2">
                    {message?.name}
                  </h3>
                  <span className="subTitleText text-xs">{message?.email}</span>
                </div>
              </div>
            );
          })}
        </Scrollbar>
      </div>

      <div className="col-span-1"></div>
    </div>
  );
}

export default page;
