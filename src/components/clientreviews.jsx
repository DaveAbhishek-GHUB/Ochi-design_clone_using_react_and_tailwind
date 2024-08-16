/* eslint-disable no-unused-vars */
import React from 'react'

function Clientreviews() {
  return (
    <div className="w-full h-screen">
        <div className="heading p-10 border-black border-b-[1px]">
            <h1 className='text-[3vw] font-["Neue_Montreal"]'>Clients’ reviews</h1>
        </div>
        <div className="clientreview w-full px-10 py-5 flex">
            <div className="services-container w-1/2 flex">
                <div className="KarmanVentures w-1/2 flex">
                    <a href="">Karman Ventures</a>
                </div>
                <div className="service 1/2">
                    <span>services:</span>
                    <div className="buttons mt-12">
                    <a href="">
                        <div className="button-1 uppercase mt-5 text-[1vw] border-black border-[1px] px-2 rounded-full">investor deck</div>
                    </a>
                    <a href="">
                        <div className="button-2 uppercase mt-5 text-[1vw] border-black border-[1px] px-2 rounded-full">sales deck</div>
                    </a>
                    </div>
                </div>
            </div>
            <div className="william_barnes w-1/2">
                <div>
                    <div className='flex justify-between mb-20'>
                        <span>William Barnes</span>
                        <a href="">READ</a>
                    </div>
                    <div className="william_image">
                        <img className=' w-[8vw] h-[8vw] rounded-lg' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="william barnes" />
                        <p className='text-[1vw] w-[70%] mt-5'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clientreviews