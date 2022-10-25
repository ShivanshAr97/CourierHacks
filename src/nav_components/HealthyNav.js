import React from 'react'
import banner7 from '../banner/banner7.jpg';
import Follow from '../components/Follow.js';
import Footer from '../components/Footer.js';
import MightLike from '../components/MightLike.js';
import Newsletter from '../components/Newsletter.js';
import Trending from '../components/Trending.js';

const HealthyNav = () => {
  return (
    <div className='bg-[#121212]'>
    <img className='flex mx-auto py-6 w-11/12 rounded-lg' src={banner7} alt="" />
    <p className='text-xs text-white mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Healthy Mind</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61f77677a848e84a1e8d7d70_Burnout_1300x860%20.jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </div>
  )
}

export default HealthyNav