import React from "react";


const Logo = (props:any) => {
  return (
    <div className="border-b-[6px] border-solid border-secondary rounded-2xl pb-[2px]">
      <h2 className=" font-zilla font-bold leading-snug tracking-wider  rounded-2xl text-black  border-b-[6px] border-solid border-primary mb-1">
        {props.name}

      </h2>
    </div>
  );
};


export default Logo;