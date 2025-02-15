import React from "react";

const HighlightCard = ({ title, desc, image }) => {
  return (
    <div
      className={`p-3 ${
        title.toLowerCase() == "testimonials"
          ? "bg-orange text-white"
          : title.toLowerCase() == "recent winners"
          ? "bg-white text-darkGray"
          : "bg-transparent text-darkGray"
      } rounded-xl w-full shadow-lg md:shadow-none`}
    >
      <div className="w-[55%] h-[7.2rem] bg-transparent rounded-lg overflow-hidden">
        <img
          src={image}
          alt="lottery celebration"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="font-semibold text-[15px] md:text-[18px] mt-[0.7rem] capitalize">
        {title}
      </h1>
      <p
        className={`text-[12px] md:text-[13px]
        
        `}
      >
        {desc}
      </p>
    </div>
  );
};

export default HighlightCard;
