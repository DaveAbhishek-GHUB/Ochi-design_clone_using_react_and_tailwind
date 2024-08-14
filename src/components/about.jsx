import React from 'react'

function About() {
  return (
    <div className="w-full py-20 px-5 bg-[#CDEA67] rounded-t-2xl">
        <div>
            <h1 className='text-[3.5vw] font-[Neue_Montreal] leading-[4vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </div>
        <div className='w-full py-10 px-5 flex my-12  border-black border-y-2'>
            <div className="section-1 w-[50%]">
                <span>What you can expect:</span>
            </div>
            <div className="section-2 w-[30%] text-[1vw] flex flex-col gap-5">
                <span>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</span>
                <span>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</span>
            </div>
            <div className="section-3 w-[20%] flex flex-col text-[1vw]">
                <span className='ml-[7vw]'>S:</span>
                <div className='m-auto'>
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
        <div className="w-full p-5 flex">
            <div className="text-section w-[50%]">
                <h1 className='text-[3vw] font-[Neue_Montreal]'>Our approach:</h1>
                <a href="" className='py-[1vw] px-[2vw] w-[12vw] bg-[#212121] text-white rounded-full flex justify-center items-center gap-5'>
                    <p className='uppercase text-[1vw]'>read more</p>
                    <div className="whtie-dot w-[0.5vw] h-[0.5vw] bg-white rounded-full"></div>
                </a>
            </div>
            <div className="image-section w-[50%] p-5">
                <img className='w-[100%] h-[100%] rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="about-image" />
            </div>
        </div>
    </div>
  )
}

export default About