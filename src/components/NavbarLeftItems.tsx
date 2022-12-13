
import React from "react";

const NavbarLeftItems = () => {
  return (
    <div className="container px-1 w-full flex flex-wrap items-center justify-end">
      <div className="flex justify-center w-full mr-5">
        <ul className="flex gap-0 list-none w-full text-lg xl:text-2xl">
          
          <li className="w-1/2 flex justify-end">
            <a
              className="hover:border-secondary border-solid border-2 rounded px-2  font-zilla font-medium flex items-center uppercase text-white justify-center w-[80%] text-center "
              href="#TheEstablishment"
            >
              Establishment
            </a>
          </li>
          <li className="w-1/2 flex justify-end">
            <a
              className="hover:border-primary border-solid border-2 rounded px-2  font-zilla font-medium flex items-center uppercase justify-center text-white w-[80%]"
              href="#Gallery"
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarLeftItems;