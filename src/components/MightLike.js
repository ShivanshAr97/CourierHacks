import React from 'react'
import Tags from './Tags.js'

const MightLike = () => {
    return (
        <>
            <div className='mx-4'>
                <h1 className='border-b w-[60%] border-gray-600 text-2xl font-bold rounded-sm mx-8 my-4 py-5 text-white'>You might also like</h1>
                <p className='mx-8 -mt-[1.18rem] border-b-2 border-gray-600 w-20'></p>
                <div className="flex">
                <div>
                    <div className='mt-12 mb-8 flex'>
                        <img className='ml-4 mr-12 h-52 w-72 rounded-lg relative cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61f775c88286b05a9be92c05_WaterWeight_1200x800.jpg" alt="" />
                        {/* <p className='absolute text-white font-bold bg-black p-2 rounded-full text-xx bg-opacity-50 z-20'>Weight Loss</p> */}
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl my-2 cursor:pointer hover:underline text-white'>
The H-To-O Of Water Weight: Everything You Need To Know</h1>
                            <p className='text-gray-500 my-2 text-sm'>Water weight is a common occurrence that you may encounter on the road to better health. What is it? Can it be managed? Read on to find out.</p>
                            <p className='my-2 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 2 Aug, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 4 min read</p>
                        </div>
                    </div>
                    <div className='my-8 flex'>
                        <img className='ml-4 mr-12 h-52 w-72 rounded-lg cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61ee37eba8105364ebc92192_DineOutHealthy_1200x800-min%20(1).jpg" alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl my-2 cursor-pointer hover:underline text-white'>Eat Better: How To Dine Out Healthily</h1>
                            <p className='text-gray-500 text-sm my-2'>Are you someone who loves to order in and just relax at home or someone whose weekend plans strictly involve eating out? No matter which side you’re on but if you love to eat outside food, read on.</p>
                            <p className='my-2 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 July, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                        </div>
                    </div>
                    <div className='my-8 flex'>
                        <img className='ml-4 mr-12 h-52 w-72 rounded-lg cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61f75a625cedec45b40d815d_BeginnersGuideToYoga_1200x800%20-min.jpg" alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl my-2 cursor-pointer hover:underline text-white'>Unlocking Zen: A Beginner’s Guide To Yoga</h1>
                            <p className='text-gray-500 text-sm my-2'>Ever wondered what’s all the fuss about Yoga? Why is it that some people swear by it? And are you planning on starting it too? Well, if yes, this article is just for you. Read on.</p>
                            <p className='my-2 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; Jan 25, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 
10
 min read</p>
                        </div>
                    </div>
                </div >
                <div><Tags></Tags></div>
                </div>
            </div>
        </>
    )
}

export default MightLike