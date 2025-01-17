import React from "react";
import TimerPelet from "./TimerPelet";

const CountDownTimer = () => {
  return (
    <div className="mt-2">
      <p className="text-center font-semibold text-orange">Countdown Timer</p>
      <div className="flex gap-[10px] items-center mt-[0.8rem] justify-center ">
        <TimerPelet large="12" small="Days" />
        <TimerPelet large="08" small="hours" />
        <TimerPelet large="45" small="minutes" />
        <TimerPelet large="23" small="seconds" />
      </div>
    </div>
  );
};

export default CountDownTimer;
