import React from 'react'
import banner6 from '../banner/banner6.jpg';
import Follow from '../components/Follow.js';
import Footer from '../components/Footer.js';
import MightLike from '../components/MightLike.js';
import Newsletter from '../components/Newsletter.js';
import Trending from '../components/Trending.js';

const FitnessNav = () => {
  return (
    <div className='bg-[#121212]'>
    <img className='flex mx-auto py-6 w-11/12 rounded-lg' src={banner6} alt="" />
    <p className='text-xs text-white mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Wellness</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62331fee1e72d66166405034_FirstElectricToothbrush_1300x860.jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </div>

  )
}

export default FitnessNav