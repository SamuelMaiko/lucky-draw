import React from "react";
import CountDownTimer from "./components/CountDownTimer";
import BelowCard from "./components/BelowCard";

const NextDraw = () => {
  return (
    <div className="text-darkGray bg-white pb-[3.2rem]">
      <h1 className=" text-center font-semibold text-lg mt-[3.5rem]">
        Next Draw
      </h1>
      <h2 className=" text-center text-[15px] mt-[0.7rem] mb-[1.4rem]">
        Join us for our next exciting draw event!
      </h2>
      <div className="w-full flex justify-center ">
        <div className="w-[22rem] bg-beige pb-[1.4rem] rounded-lg pt-[1.5rem]">
          <h1 className="text-center font-bold text-black text-[15px]">
            Draw Date: November 25, 2025
          </h1>
          <p className="text-center font-semibold mt-2">Time: 6:00 PM</p>
          <CountDownTimer />
        </div>
      </div>
      <div className="mt-[4rem] flex justify-center gap-7">
        <BelowCard
          title="Win amazing prizes!"
          desc="Participate in the draw and stand a chance to win fantastic prizes.
        Don't miss out!"
        />
        <BelowCard
          title="how to participate"
          desc="Learn how you can enter the draw and increase your chances of winning with easy steps. "
        />
        <BelowCard
          title="terms & conditions"
          desc="Read the terms and regulations before participating in the draw to ensure a fair game."
        />
      </div>
    </div>
  );
};

export default NextDraw;
