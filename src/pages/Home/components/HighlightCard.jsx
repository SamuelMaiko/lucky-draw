import React from "react";

const HighlightCard = ({ title, desc }) => {
  return (
    <div
      className={`p-3 ${
        title.toLowerCase() == "testimonials"
          ? "bg-orange text-white"
          : title.toLowerCase() == "recent winners"
          ? "bg-white text-darkGray"
          : "bg-transparent text-darkGray"
      } rounded-xl`}
    >
      <div className="w-[55%] h-[7.2rem] bg-black rounded-lg"></div>
      <h1 className="font-semibold text-[18px] mt-[0.7rem] capitalize">
        {title}
      </h1>
      <p
        className={`text-[13px]
        
        `}
      >
        {desc}
      </p>
    </div>
  );
};

export default HighlightCard;
