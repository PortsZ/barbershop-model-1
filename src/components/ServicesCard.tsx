import React from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import BarberPole from "./BarberPole";

const useElementOnScreen = (options: any) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef, options]);

  return [targetRef, isVisible];
};

const ServicesCard = (props: any) => {
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };
  }, []);

  const [priceRef, priceIsVisible]: any = useElementOnScreen(options);

  return (
    <div
      className="bg-gradient-dark w-11/12 gap-5 md:gap-0 p-10 lg:p-16 text-white 
       rounded-tl-3xl rounded-br-3xl flex md:flex-row flex-col items-center justify-between"

    >
      <div
        ref={priceRef}
        className="flex md:w-2/3 w-full md:justify-start justify-center flex-col md:px-10 py-4  "
      >
        <h1 className="text-4xl lg:text-6xl justify-center font-medium font-zilla uppercase">
          {props.name}
        </h1>
        <p className="text-lg font-josefin lg:text-2xl">{props.description}</p>
      </div>
      
      <div className={`flex items-center justify-between md:text- md:w-1/3 w-full`}>
        <div
          className={`${
            priceIsVisible ? "animate-barberPoleLeft" : ""
          } opacity-0`}
        >
          <BarberPole />
        </div>
        <h1 className={`${
            priceIsVisible ? "animate-price" : ""
          } opacity-0 text-5xl lg:text-8xl text-white font-zilla font-bold`}>
          <span className="font-josefin font-normal leading-loose text-2xl lg:text-4xl">
            $
          </span>
          {props.price}
          <span className=" font-normal leading-loose  text-2xl lg:text-5xl">,00</span>
        </h1>
        <div
          className={`${
            priceIsVisible ? "animate-barberPoleRight" : ""
          } opacity-0`}
        >
          <BarberPole />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
