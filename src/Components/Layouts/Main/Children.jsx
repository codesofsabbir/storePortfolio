import Footer from "@/Components/Footer";
import React from "react";
import { Scrollbar } from "smooth-scrollbar-react";
function Children({children}) {
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
      <div
        className={`w-full lg:w-[calc(100%-370px)] pb-16 lg:pb-0 lg:mr-[82px] transition-all duration-300 overflow-y-auto children`}
      >
        <div className="mb-10 px-0 py-0 md:px-8 md:pt-6">{children}</div>
        <Footer />
      </div>
    </Scrollbar>
  );
}

export default Children;
