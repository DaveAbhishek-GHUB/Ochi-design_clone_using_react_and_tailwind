/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    
    const handleHover = (index) => {
        cards[index].start({y: "0"});
    };
  
    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"});
    };

    return (
        <div className="w-full py-10 px-5">
            <div className="heading w-full border-black border-b-[1px] py-10">
                <h1 className='text-[3vw] font-["Neue_Montreal"]'>Featured projects</h1>
            </div>
            <div className="projects w-full py-10">
                {/* first two cards */}
                <div className="cards w-[100%] flex justify-center gap-5 relative">
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="card-container w-[45%] overflow-hidden">
                        <div className="card-headings absolute top-[13vw] left-[40vw] z-10 w-[18vw] h-[6vw] flex overflow-hidden">
                            {"fyde".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.05}} className='text-[5vw] font-semibold text-[#CDEA67] uppercase inline-block'>{item}</motion.span>
                            ))}
                        </div>
                        <div className="card w-full h-full hover:scale-95 transition-all duration-500 ease-in-out">
                            <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="project-card-1" />
                        </div>
                        <div className="card-buttons mt-2">
                            <a href="">
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>audit</span>
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>copywriting</span>
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>sales deck</span>
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>slides design</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="card-container w-[45%] overflow-hidden">
                        <div className="card-headings absolute top-[13vw] left-[41vw] z-10 w-[18vw] h-[6vw] flex overflow-hidden">
                            {"vise".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.05}} className='text-[5vw] font-semibold text-[#CDEA67] uppercase inline-block'>{item}</motion.span>
                            ))}
                        </div>
                        <div className="card w-full h-full hover:scale-95 transition-all duration-500 ease-in-out">
                            <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="project-card-2" />
                        </div>
                        <div className="card-buttons mt-2">
                            <a href="">
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>agency</span>
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>company presentation</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* second two cards */}
                <div className="cards w-[100%] flex justify-center gap-5 relative mt-5">
                    <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className="card-container w-[45%] overflow-hidden">
                        <div className="card-headings absolute top-[13vw] left-[25vw] z-10 mw-[18vw] h-[6vw] flex overflow-hidden">
                            {"ah2&matthorn".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={cards[2]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.05}} className='text-[5vw] font-semibold text-[#CDEA67] uppercase inline-block'>{item}</motion.span>
                            ))}
                        </div>
                        <div className="card w-full h-full hover:scale-95 transition-all duration-500 ease-in-out">
                            <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="project-card-3" />
                        </div>
                        <div className="card-buttons mt-2">
                            <a href="">
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>pitch deck</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverEnd(3)} className="card-container w-[45%] overflow-hidden">
                        <div className="card-headings absolute top-[13vw] left-[38vw] z-10 mw-[18vw] h-[6vw] flex overflow-hidden">
                            {"trawa".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={cards[3]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.05}} className='text-[5vw] font-semibold text-[#CDEA67] uppercase inline-block'>{item}</motion.span>
                            ))}
                        </div>
                        <div className="card w-full h-full hover:scale-95 transition-all duration-500 ease-in-out">
                            <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="project-card-4" />
                        </div>
                        <div className="card-buttons mt-2">
                            <a href="">
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>brand identity</span>
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>design research</span>
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>investor deck</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* third card row */}
                <div className="cards w-[100%] flex gap-5 relative mx-10 mt-5">
                    <motion.div onHoverStart={() => handleHover(4)} onHoverEnd={() => handleHoverEnd(4)} className="card-container w-[45%] overflow-hidden">
                        <div className="card-headings absolute top-[15vw] left-[3vw] z-10 mw-[18vw] h-[6vw] flex overflow-hidden">
                            {"premiumblend".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={cards[4]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.05}} className='text-[5vw] font-semibold text-[#CDEA67] uppercase inline-block'>{item}</motion.span>
                            ))}
                        </div>
                        <div className="card w-full h-full hover:scale-95 transition-all duration-500 ease-in-out">
                            <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="project-card-5" />
                        </div>
                        <div className="card-buttons mt-2">
                            <a href="">
                                <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>branded template</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured