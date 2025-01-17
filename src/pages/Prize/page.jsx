import React from "react";
import balloons from "../../assets/balloons.jpg";

const Prize = () => {
  return (
    <div className="grid place-items-center h-[79.5vh] md:h-[74.5vh] bg-lightGray">
      <div className="p-5 w-[85%] md:w-[27%] pb-7 shadow-lg rounded-lg bg-white">
        <div className="bg-transparent size-[6rem]">
          <img
            src={balloons}
            alt="lottery celebration"
            className="w-[120%] h-[130%] object-cover object-right"
          />
        </div>
        <h1 className="font-semibold text-center mt-5">Congratulations!</h1>
        <p className="text-[12px] my-2">
          You are the winner of the latest lucky draw! Enjoy your prize!
        </p>
        <div className="flex justify-center mt-5">
          <button className="font-medium text-white bg-orange rounded-lg py-1 px-4 text-[12px]">
            Participate in the Next Draw{" "}
          </button>
        </div>
        <p className="text-[12px] text-center mt-5 ">
          Didn&rsquo;t win this time? Don&rsquo;t worry stay positive and try
          again!
        </p>
      </div>
    </div>
  );
};

export default Prize;
