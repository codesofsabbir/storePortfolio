"use client";
import React from "react";
import { Scrollbar } from "smooth-scrollbar-react";
function AdminChildren({ children }) {
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
      <div className="mt-20 ml-20 px-7 py-7 w-full overflow-y-auto">
        {children}
      </div>
    </Scrollbar>
  );
}

export default AdminChildren;
