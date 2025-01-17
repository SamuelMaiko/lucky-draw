import React from "react";
import HighlightCard from "./components/HighlightCard";
import celebration from "../../assets/celebration.jpg";
import board from "../../assets/board.avif";
import clock from "../../assets/clock.jpg";
import testimonials from "../../assets/testimonials.jpg";

const Home = () => {
  return (
    <div className="bg-beige pb-[3rem]">
      <div className="w-full flex flex-col items-center justify-center md:pt-[3.4rem]">
        <div className="w-[100%] md:w-[60%] h-[25rem] bg-transparent ">
          <img
            src={celebration}
            alt="lottery celebration"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <button className="mt-[2.2rem] bg-orange text-white font-semibold px-5 py-2 rounded-xl text-[12px] md:text-[14px]">
          Connect Address
        </button>
      </div>
      <div className="w-[92%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] mt-[6rem]">
        <HighlightCard
          title="Recent Winners"
          desc="Meet out latest lucky winneres and their incredible salaries."
          image={board}
        />
        <HighlightCard
          title="Upcoming Draws"
          desc="Don't miss out!! Check the schedule for upcoming lottery draws."
          image={clock}
        />
        <HighlightCard
          title="Testimonials"
          desc="Hear from our players about their experience and wins."
          image={testimonials}
        />
      </div>
    </div>
  );
};

export default Home;
