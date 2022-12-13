
import React from "react";
import BarberPole from "./BarberPole";
import NavbarLeftItems from "./NavbarLeftItems";
import NavbarRightItems from "./NavbarRightItems";
import { useState } from "react";5
import Logo from "./Logo";
import {logo} from "../data/constants"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="w-full flex flex-col justify-center items-start ">
    <section className="w-full flex justify-center items-center relative mx-auto ">
      <nav className="md:gap-0 gap-4 relative w-full flex p-4 items-center justify-center sm:px-2 ">
        <div className=" py-4 ">
          <BarberPole />
        </div>
        <div className="hidden md:block w-full">
          <NavbarLeftItems />
        </div>

        <div
          className=" w-full md:w-auto flex items-center justify-center  
        bg-background bg-opacity-30  p-4 rounded-b-3xl rounded-tl-3xl 
          md:text-3xl xl:text-5xl text-2xl"
        >
          <Logo name={logo.nav}/>
        </div>

        {/** MOBILE HAMBURGER */}
        <button className="" onClick={handleButton}>
          <div
            className={`md:hidden relative space-y-2 transition-all
          ${toggle ? "" : "block"}
          `}
          >
            <span
              className={`transition-all duration-500 ease-[cubic-bezier(.72,-0.95,.06,1.69)] block w-8 h-1 ${
                toggle ? "bg-primary relative  border-solid border-[1px] border-contrast translate-y-3 rounded-tl -rotate-45 " : "bg-white"
              }`}
            ></span>
            <span
              className={`transition-all duration-500 ease-[cubic-bezier(.72,-0.95,.06,1.69)] block w-8 h-1 ${
                toggle ? "opacity-0" : "bg-white"
              }`}
            ></span>
            <span
              className={`transition-all duration-500 ease-[cubic-bezier(.72,-0.95,.06,1.69)] block h-1 ${
                toggle ? "bg-secondary relative border-solid border-[1px] border-contrast rounded-bl -translate-y-3 rotate-45 w-8" : "bg-white w-5"
              }`}
            ></span>
          </div>

        </button>
        {/** MOBILE HAMBURGER */}

        <div className="hidden md:block w-full">
          <NavbarRightItems />
        </div>

        <div className=" hidden md:block right-0 py-4">
          <BarberPole />
        </div>
      </nav>

    </section>
    <div
            className={`${
              !toggle ? "hidden" : "flex animate-navbarMobile "
            } p-6 md:hidden justify-center items-center  w-full opacity-0 relative transition-all  right-0 left-0  my-2 rounded-xl flex`}
          >
            <ul className="list-none   flex justify-end items-center w-full flex-col flex-1">
              <li className="w-full py-1">
                <a
                  className="hover:border-secondary border-solid border-2 rounded  text-2xl font-zilla font-medium flex items-center uppercase text-white justify-center w-[100%] text-center "
                  href="#TheEstablishment"
                >
                  The Establishment
                </a>
              </li>
              <li className="w-full py-1">
                <a
                  className="hover:border-primary border-solid border-2 rounded  text-2xl font-zilla font-medium flex items-center uppercase justify-center text-white w-[100%]"
                  href="#Gallery"
                >
                  Gallery
                </a>
              </li>
              <li className="w-full py-1 ">
                <a
                  className="hover:border-secondary border-solid border-2 rounded  text-2xl font-zilla font-medium flex items-center uppercase text-white justify-center w-[100%] text-center "
                  href="#Services"
                >
                  Services
                </a>
              </li>
              <li className=" w-full py-1">
                <a
                  className="hover:border-primary border-solid border-2 rounded  text-2xl font-zilla font-medium flex items-center uppercase justify-center text-white w-[100%]"
                  href="#About"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
    </div>
  );
};

export default Navbar;
