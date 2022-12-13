import React from "react";

const BarberPole = () => {
  return (
    <div className="flex flex-col items-center relative z-10">
      <div
        className="barber-pole-top 
        sm:top-1 sm:h-[20px] sm:w-[54px] h-2  
        border-solid border-2 sm:border-[6px] 
        border-blend w-8 before:border-2 before:border-blend 
        before:border-solid sm:before:border-[6px] sm:before:h-[40px]
        sm:before:w-[40px] before:h-6 before:w-6 before:rounded-lg 
        sm:before:rounded-2xl sm:before:-top-6 before:-top-3 before:bg-white
        before:z-[-1] 
      "
      ></div>
      <div className="barber-pole sm:h-24 sm:w-10 h-10 w-6 sm:border-[6px]  border-solid 
      border-2 border-blend z-50"></div>
      <div
        className="
        barber-pole-bottom 
        sm:bottom-1 sm:h-[20px] sm:w-[54px] 
        h-2  border-solid border-2 sm:border-[6px]
        border-blend w-8 before:border-2 before:border-blend 
        before:border-solid sm:before:border-[6px] sm:before:h-[40px]
        sm:before:w-[40px] before:h-6 before:w-6 before:rounded-lg 
        sm:before:rounded-2xl sm:before:-bottom-6 before:-bottom-3 before:bg-white
         before:z-[-1] "
      ></div>
    </div>
  );
};

export default BarberPole;
