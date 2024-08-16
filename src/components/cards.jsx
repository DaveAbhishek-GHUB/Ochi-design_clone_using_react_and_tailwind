/* eslint-disable no-unused-vars */
import React from 'react'

function Cards() {
  return (
    <div className="w-full p-10 flex gap-5">
        <div className="card_01 w-1/2 h-[24vw] rounded-lg bg-[#004D43] flex relative">
            <img className='m-auto' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ochi" />
            <span className='absolute text-[1vw] text-[#CDEA67] px-2 bottom-5 left-5 border-[#CDEA67] border-[1px] rounded-full'>@2019-2022</span>
        </div>
        <div className="card_02 w-[25%] h-[24vw] rounded-lg bg-[#212121] flex relative">
            <img className='m-auto' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="clutch logo" />
            <span className='absolute text-[1vw] text-white px-2 bottom-5 left-5 border-white border-[1px] rounded-full'>@2019-2022</span>
        </div>
        <div className="card_03 w-[25%] h-[24vw rounded-lg bg-[#212121] flex relative">
            <img className='w-[8vw] h-[8vw] m-auto' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="TFA logo" />
            <span className='absolute text-[1vw] text-white px-2 bottom-5 left-5 border-white border-[1px] rounded-full'>@2019-2022</span>
        </div>
    </div>
  )
}

export default Cards