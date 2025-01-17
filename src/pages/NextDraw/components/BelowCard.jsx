import React from "react";

const BelowCard = ({ title, desc }) => {
  return (
    <div
      className={`w-[17rem] p-5 
    ${
      title.toLowerCase() == "how to participate"
        ? "bg-lightGray text-black"
        : title.toLowerCase() == "terms & conditions"
        ? "bg-beige text-black"
        : "bg-orange text-white"
    }
    rounded-xl`}
    >
      <h1 className="capitalize font-bold">{title}</h1>
      <p className="text-[13px] mt-2">{desc}</p>
    </div>
  );
};

export default BelowCard;
