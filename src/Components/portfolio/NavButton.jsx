'use client'
import React from 'react';

const NavButtons = [
  { id: "1", category: "all", value: "All" },
  { id: "2", category: "design", value: "Design" },
  { id: "3", category: "development", value: "Development" },
  { id: "4", category: "wordpress", value: "WordPress" },
  { id: "5", category: "blogger", value: "Blogger" },
];

function NavButton({filterWith, setFilterWith}) {
  

  return (
    <div className="w-full h-[50px] flex flex-wrap gap-3 md:gap-10 items-center mt-5 mb-4 md:mt-3 md:font-semibold">
      {
        NavButtons.map((dt) => (
          <button
            key={dt.id}
            onClick={() => setFilterWith(dt.category)}
            className={`cursor-pointer textWithHover text-xs md:text-base ${filterWith === dt.category ? 'activeText' : 'titleText'}`}
          >
            {dt.value}
          </button>
        ))
      }
    </div>
  );
}

export default NavButton;
