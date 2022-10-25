import React from 'react'

const Trending = () => {
    return (
        <>
            <div className='mx-4'>
                <h1 className='border-b border-b-gray-600  w-auto text-2xl text-white font-bold rounded-sm mx-8 my-[0.85rem] py-5'>Trending Topics</h1>
                <p className='mx-8 -mt-4 border-b-2 border-b-gray-600 w-20'></p>
                <div className='mt-4 mx-4 flex'>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/628ced55da81d8f1fdf8af80_ORAAT_20.jpg" alt="" />
                        <h2 className='mx-4 font-bold text-lg hover:underline text-white'>Lose Weight - One Rep At A Time</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/627a85ea29bc1b618bdddce5_Img1200.jpg" alt="" />
                        <h2 className='mx-4 font-bold text-lg hover:underline text-white'>Choosing Your First Electric Toothbrush</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 10 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/6274d242040b67231ad3923f_1200800.jpg" alt="" />
                        <h2 className='mx-4 font-bold text-lg hover:underline text-white'>Minimizing Attendance Fraud Through Facial Recognition At Cult Centers</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 4 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 10 min read</p>
                    </div>

                </div>
                <div className='flex justify-end mx-8 cursor-pointer  hover:text-num1'>
                    <p className='text-xs text-white py-1'>VIEW ALL</p>
                    <button className="btn outline-none text-sm px-2 mx-1 rounded-sm text-white hover:text-white"><i class="fa-solid fa-2xs fa-chevron-right"></i></button>
                </div>
            </div>

        </>
    )
}

export default Trending