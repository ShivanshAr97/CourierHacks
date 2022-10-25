import React from 'react'

const CarouselSide = () => {
    return (
        <>
            <div className='flex flex-col bg-[#181818] rounded-lg mx-12 my-4 w-[35rem]'>
                <div className='flex mt-4 -mb-2 border-b border-b-gray-600'>
                    <img className='rounded-lg w-20 h-20 mx-4 my-2 mb-4 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62d7f5ba052b0d326e9bca1b_Indian-Kitchen_03.jpg" alt="" />
                    <div className='m-2'>
                        <h2 className='mx-4 font-bold cursor:pointer hover:underline text-white'>Your Guide To Hacking The Indian Kitchen</h2>
                        <p className=' text-gray-300 text-xs mx-4 my-2 spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                </div>
                <div className='flex mt-6 border-b border-b-gray-600'>
                    <img className='rounded-lg w-20 h-20 mx-4 my-2 mb-4 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62cd06f08961531a2bfd2f39_1200800.jpg" alt="" />
                    <div className='m-2'>
                        <h2 className='mx-4 font-bold hover:underline text-white'>Toning, Flexibility & Strength ⁠— Can Yoga Do It</h2>
                        <p className='mx-4 my-2 text-gray-300 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                </div>
                <div className='flex mt-4 -mb-2'>
                    <img className='rounded-lg w-20 h-20 mx-4 my-2 mb-4 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62baab9f4f86f45f7365925f_AppleCider_70.jpg" alt="" />
                    <div className='m-2'>
                        <h2 className='mx-4 font-bold hover:underline text-white'>Apple Cider Vinegar - What Does It Really Do?</h2>
                        <p className='mx-4 mt-2 text-gray-300 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                </div>
                <div className='flex mt-4 border-b border-b-gray-600'></div>
                <div className='flex mt-4'>
                    <img className='rounded-lg w-20 h-20 mx-4 my-2 mb-4 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62a9a67a0ffd93752cff6fe8_BoxingForWeightLoss_32.jpg" alt="" />
                    <div className='m-2'>
                        <h2 className='mx-4 font-bold hover:underline text-white'>Punch The Fat Away! - Fitness Boxing</h2>
                        <p className='mx-4 mt-2 text-gray-300 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default CarouselSide