import React from 'react'
import { motion, useSpring } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

const ExploreCard = ({id, index, active, url, isLast, isFirst, handleClick}:any) => {
  return (
    
        <motion.div 
        className={`relative  ${
            active === id ? 
            'lg:flex-[3.5] flex-[10]  border-white border-solid border-8 ' 
            : 
            
            `border-solid border-8 border-primary lg:flex-[0.5] 
            md:flex-[1.5] flex-[0.8]`


        }
        ${isLast ? 'md:rounded-r-[32px] md:rounded-tl-none rounded-tl-[32px]':''}
        ${isFirst ? 'md:rounded-l-[32px] rounded-tl-[32px]':'md:rounded-tl-none rounded-tl-[32px]'}

        
        flex items-start  justify-center 
        xxl:min-w-[400px] xxl:h-[1300px]
        xl:min-w-[100px] xl:h-[700px]
        lg:min-w-[90px] lg:h-[700px] 
        md:min-w-[50px] md:min-h-[50vh]
        min-w-full min-h-[50px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-clip `} 


        onClick={()=>handleClick(id)}>
            <motion.div className={`h-full w-full`}>
                <img
                  src={url}
                  alt={index}
                  className="absolute w-full h-full object-cover pointer-events-none  "
                />
                
              </motion.div>
        </motion.div>
  )
}

export default ExploreCard