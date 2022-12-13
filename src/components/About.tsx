import React from "react";
import Map from "./Map";
import { GrStar } from "react-icons/gr";
import Logo from "./Logo";
import { about } from "../data/constants"; 

const About = () => {
  return (
    <div className="w-full flex  justify-center items-center px-2 md:px-10 md:py-24 gap-8 relative  min-h-[60vh] ">
      <div className="w-full flex flex-col md:flex-row justify-between items-center lg:px-24 sm:px-10 px-4 sm:py-16 py-4 bg-gradient-dark h-full rounded-tl-3xl rounded-br-3xl">
        <div className="flex h-1/2 flex-col md:w-1/2 justify-center items-center gap-5 md:mr-10 lg:px-6">
          <div className="w-full flex justify-start">
            <h1
              className="flex justify-between items-end w-full text-4xl font-zilla text-center 
            text-yellow-400 mb-10 "
            >
              <div className=" h-1 w-1/3 flex items-center rounded-bl-[45px]"></div>
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <div className=" h-1 w-1/3 flex items-center rounded-br-[45px]"></div>
            </h1>
          </div>

          <div>
            <p className="text-white font-josefin xl:text-3xl sm:text-2xl  text-md  ">
            {about.description}
            </p>
          </div>
          <div className="w-1/4">
            <Logo/>
          </div>
          <div className="w-full flex justify-center">
            <h1 className="  text-4xl font-zilla text-left text-primary mb-5">
              {about.address}
            </h1>
          </div>
        </div>
        <div className="relative md:w-1/2 w-full h-1/2 flex justify-start items-center">
          <div className="w-full  flex justify-end items-center bg-gradient-dark rounded-tl-3xl rounded-br-3xl ">
            <div className="w-full h-[50vh] sm:h-[60vh]">
              <Map />
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default About;
