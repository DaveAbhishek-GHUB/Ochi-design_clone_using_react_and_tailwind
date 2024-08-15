/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'

function Featured() {
  return (
    <div className="w-full py-10 px-5">
        <div className="heading w-full border-black border-b-[1px] py-10">
            <h1 className='text-[3vw] font-["Neue_Montreal"]'>Featured projects</h1>
        </div>
        <div className="projects w-full py-10">
            {/* first two cards */}
            <div className="cards w-[100%] flex justify-center gap-5 relative">
                <div className="card-container w-[45%] overflow-hidde">
                <div className="card1-headings absolute top-[13vw] left-[40vw] z-10 w-[18vw] h-[6vw]">
                    {/* <h1 className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>fyde</h1> */}
                    {"fyde".split('').map((item, index)=><span className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>{item}</span>)}
                </div>
                    <div className="card w-full h-ful hover:scale-95 transition-all duration-500 ease-in-out">
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
                </div>

                <div className="card-container w-[45%] overflow-hidde">
                <div className="card1-headings absolute top-[13vw] left-[41vw] z-10 w-[18vw] h-[6vw]">
                    {/* <h1 className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>vise</h1> */}
                    {"vise".split('').map((item, index)=><span className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>{item}</span>)}
                </div>
                    <div className="card w-full h-ful hover:scale-95 transition-all duration-500 ease-in-out">
                        <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="project-card-2" />
                    </div>
                    <div className="card-buttons mt-2">
                        <a href="">
                            <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>agency</span>
                            <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>company presentation</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* second-two cards */}
            <div className="cards w-[100%] flex justify-center gap-5 relative mt-5">
                <div className="card-container w-[45%] overflow-hidde">
                <div className="card1-headings absolute top-[13vw] left-[25vw] z-10 w-[18vw] h-[6vw]">
                    {/* <h1 className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>fyde</h1> */}
                    {"ah2&matthorn".split('').map((item, index)=><span className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>{item}</span>)}
                </div>
                    <div className="card w-full h-ful hover:scale-95 transition-all duration-500 ease-in-out">
                        <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="project-card-1" />
                    </div>
                    <div className="card-buttons mt-2">
                        <a href="">
                            <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>pitch deck</span>
                        </a>
                    </div>
                </div>

                <div className="card-container w-[45%] overflow-hidde">
                <div className="card1-headings absolute top-[13vw] left-[38vw] z-10 w-[18vw] h-[6vw]">
                    {/* <h1 className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>vise</h1> */}
                    {"trawa".split('').map((item, index)=><span className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>{item}</span>)}
                </div>
                    <div className="card w-full h-ful hover:scale-95 transition-all duration-500 ease-in-out">
                        <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="project-card-2" />
                    </div>
                    <div className="card-buttons mt-2">
                        <a href="">
                            <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>brand identity</span>
                            <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>design research</span>
                            <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>investor deck</span>
                        </a>
                    </div>
                </div>
            </div>

            
            {/* third card row */}
            <div className="cards w-[100%] flex gap-5 relative mt-5">
                <div className="card-container w-[45%] overflow-hidde">
                <div className="card1-headings absolute top-[15vw] left-[3vw] z-10 w-[18vw] h-[6vw]">
                    {/* <h1 className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>fyde</h1> */}
                    {"premiumblend".split('').map((item, index)=><span className='text-[5vw] font-semibold text-[#CDEA67] uppercase'>{item}</span>)}
                </div>
                    <div className="card w-full h-ful hover:scale-95 transition-all duration-500 ease-in-out">
                        <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="project-card-1" />
                    </div>
                    <div className="card-buttons mt-2">
                        <a href="">
                            <span className='uppercase py-1 px-3 text-[1vw] border-black border-[1px] rounded-full mx-2'>branded template</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured