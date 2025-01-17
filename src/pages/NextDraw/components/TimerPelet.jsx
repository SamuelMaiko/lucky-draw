import React from "react";

const TimerPelet = ({ large, small }) => {
  return (
    <div className="bg-orange text-white px-[9px] flex flex-col items-center rounded-lg py-[0.7rem]">
      <p className="font-semibold">{large}</p>
      <p className="text-[10px] capitalize">{small}</p>
    </div>
  );
};

export default TimerPelet;
