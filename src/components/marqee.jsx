/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'

function Marqee() {
  return (
<div className="w-full py-10 bg-[#004D43] flex justify-center items-center rounded-t-xl overflow-hidden">
        <div className='text-white border-white border-y-[1px] flex whitespace-nowrap overflow-hidden'>
            <motion.h1 
                initial={{x: "0%"}} 
                animate={{x: "-100%"}} 
                transition={{ease: "linear", repeat: Infinity, duration: 10}} 
                className='text-[22vw] leading-none font-[Test_Founders_Grotesk_X-Condensed] font-semibold uppercase tracking-tighter pr-20'
            >
                we are ochi
            </motion.h1>
            <motion.h1 
                initial={{x: "0%"}} 
                animate={{x: "-100%"}} 
                transition={{ease: "linear", repeat: Infinity, duration: 10}} 
                className='text-[22vw] leading-none font-[Test_Founders_Grotesk_X-Condensed] font-semibold uppercase tracking-tighter pr-20'
            >
                we are ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marqee