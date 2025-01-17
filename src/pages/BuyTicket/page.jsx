import React from "react";
import buyticket from "../../assets/buy.jpg";

const BuyTicket = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
      <div className="flex-1 px-[2rem] pt-[2.5rem]">
        <h1 className="capitalize font-semibold text-lg md:text-xl">
          Buy your ticket
        </h1>
        <div className="flex gap-3 bg-beige rounded-lg p-[9px] mt-[1rem]">
          <div className="bg-transparent rounded-lg md:size-[6rem] size-[4rem]">
            <img
              src={buyticket}
              alt="lottery celebration"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 md:flex-none">
            <h1 className="capitalize font-semibold text-[15px]">big wins</h1>
            <p className="text-[12px] md:text-[13px]">
              Join the Mega Millions lottery for a chance to win big! Draw date:
              October 30.
            </p>
            <button className="capitalize font-bold text-white bg-orange rounded-2xl mt-2 py-[6px] w-full text-[13px]">
              Buy now{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[86%] md:w-[28%] pt-[2rem] md:pr-[2.3rem] pb-[2rem] h-[60.8vh] md:h-full ">
        <div className="bg-lightGray w-full md:h-[71vh] rounded-xl p-5">
          <h1 className="capitalize font-semibold text-lg md:text-xl mb-[7rem]">
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
          <button className="mt-2 text-[14px] capitalize font-semibold text-white bg-orange rounded-2xl py-2 w-full texst-[13px]">
            Purchase{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
