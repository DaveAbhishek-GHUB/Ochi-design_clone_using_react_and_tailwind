/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen pt-1" data-scroll data-scroll-speed="-.3">
      <div className="textStructure mt-32 px-16">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker font-[Test_Founders_Grotesk_X-Condensed]">
              <div className="flex items-center">
              {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[8vw] h-[5vw] bg-red-300 rounded-md mr-1">
                <img className="w-full h-full rounded-md" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="Description of image" />
              </motion.div>)}
              <h1 className="text-[6vw] leading-none uppercase tracking-tighter font-extrabold">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
        <div className="border-black border-t-2 mt-32 flex justify-between py-3">
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=> {
            return <p className="text-md font-light tracking-tighter">{item}</p>
          })}
          <div className="flex justify-center items-center gap-5">
          <div className="px-3 py-1 border-black uppercase border-2 rounded-full text-sm"><a href="#">start the project</a></div>
          <div className="w-8 h-8 rounded-full  border-black border-2 flex justify-center items-center">
            <span className="rotate-[220deg]"><FaArrowDownLong /></span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
