import React from "react";
import HighlightCard from "./components/HighlightCard";

const Home = () => {
  return (
    <div className="bg-beige pb-[3rem]">
      <div className="w-full flex flex-col items-center justify-center pt-[3.4rem]">
        <div className="w-[60%] h-[25rem] bg-black"></div>
        <button className="mt-[2.2rem] bg-orange text-white font-semibold px-5 py-2 rounded-xl text-[14px]">
          Connect Address
        </button>
      </div>
      <div className="w-[70%] mx-auto grid grid-cols-3 gap-[1.5rem] mt-[6rem]">
        <HighlightCard
          title="Recent Winners"
          desc="Meet out latest lucky winneres and their incredible salaries."
        />
        <HighlightCard
          title="Upcoming Draws"
          desc="Don't miss out!! Check the schedule for upcoming lottery draws."
        />
        <HighlightCard
          title="Testimonials"
          desc="Hear from our players about their experience and wins."
        />
      </div>
    </div>
  );
};

export default Home;
