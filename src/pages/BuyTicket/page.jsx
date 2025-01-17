import React from "react";

const BuyTicket = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 px-[2rem] pt-[2.5rem]">
        <h1 className="capitalize font-semibold text-xl">Buy your ticket</h1>
        <div className="flex gap-3 bg-beige rounded-lg p-[9px] mt-[1rem]">
          <div className="bg-black rounded-lg size-[6rem]"></div>
          <div className="flex flex-col justify-center">
            <h1 className="capitalize font-semibold text-[15px]">big wins</h1>
            <p className="text-[13px]">
              Join the Mega Millions lottery for a chance to win big! Draw date:
              October 30.
            </p>
            <button className="capitalize font-bold text-white bg-orange rounded-2xl py-[2px] w-full text-[13px]">
              Buy now{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[28%] pt-[2rem] pr-[2.3rem] pb-[2rem]">
        <div className="bg-lightGray w-full h-[71vh] rounded-xl p-5">
          <h1 className="capitalize font-semibold text-xl mb-[7rem]">
            your ticket
          </h1>
          <div>
            <label htmlFor="name" className="font-medium text-sm ">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block pl-2 text-sm h-[2.7rem] w-[91%] bg-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-1">
            <label htmlFor="email" className="font-medium text-sm ">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block pl-2 text-sm h-[2.7rem] w-[91%] bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <button className="mt-2 text-[14px] capitalize font-semibold text-white bg-orange rounded-2xl py-[2px] w-full texst-[13px]">
            Purchase{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
