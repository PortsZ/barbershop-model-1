import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import {staggerContainer} from '../../utils/motion'
import ExploreCard from "./ExploreCard";









// APP=======================================================
const HeroCarousel = () => {
  const [active, setActive] = useState('hero2')
  
  
  const images = [
    {id: 'hero1',
    url:"/images/hero1.jpg",
    title: 'HERO1',
    isFirst: true,
  },
    {id: 'hero2',
    url:"/images/hero2.jpg",
    title: 'HERO2'
  },
    {id: 'hero3',
    url:"/images/hero3.jpg",
    title: 'HERO3',
    isLast:true,
  },
  ];
  const lastImage = images.length - 1;
  

  

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div className="cursor-grab w-full h-full rounded-l-3xl">
        <motion.div className="flex gap-5 flex-col md:flex-row w-full md:h-auto h-[90vh] sm:p-10 p-2">
          {images.map((image, index)=>{
            return(
              <ExploreCard
                key={image.id}
                {...image}
                index={index}
                active={active}
                handleClick={setActive}
              />
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCarousel;



