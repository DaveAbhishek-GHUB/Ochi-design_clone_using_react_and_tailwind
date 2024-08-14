/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=> {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            
            // console.log(deltaX);
            // console.log(deltaY);

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
            
        });
    })
  return (
    <div className="eyes w-full h-screen">
        <div className="w-full h-screen inner-eye-section bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center relative">
            <div className="absolute top-[20vw] left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 flex justify-around">
                <div className="eye w-[14vw] h-[14vw] rounded-full bg-white flex justify-center items-center">
                    <div className="relative inner-eyes w-[60%] h-[60%] bg-[#212121] rounded-full">
                        <p className='text-white absolute top-[35%] left-[35%]'>play</p>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[20%] forrorate w-full h-[2vw] flex items-center">
                        <div className="cornea w-[20%] h-[80%] bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="eye w-[14vw] h-[14vw] rounded-full bg-white flex justify-center items-center">
                    <div className="relative inner-eyes w-[60%] h-[60%] bg-[#212121] rounded-full">
                        <p className='text-white absolute top-[35%] left-[35%]'>play</p>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[20%] forrorate w-full h-[2vw] flex items-center">
                        <div className="cornea w-[20%] h-[80%] bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes