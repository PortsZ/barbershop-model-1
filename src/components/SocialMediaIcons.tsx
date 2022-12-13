import React from "react";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc"

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row xl:flex-row gap-3  justify-start items-center ">
      <a target="_blank" href="https://www.instagram.com/sharpoetry/">
        <FaInstagram/></a>
      
    </div>
  );
};

export default SocialMediaIcons;
