import React from 'react'
import banner9 from '../banner/banner9.jpg';
import Follow from '../components/Follow.js';
import Footer from '../components/Footer.js';
import MightLike from '../components/MightLike.js';
import Newsletter from '../components/Newsletter.js';
import Trending from '../components/Trending.js';

const EngineeringNav = () => {
  return (
    <div className='bg-[#121212]'>
    <img className='flex mx-auto py-6 w-11/12 rounded-lg' src={banner9} alt="" />
    <p className='text-xs text-white mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Engineering</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/6256f3e17e3d26af26811225_Load%20Testing2.jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </div>
  )
}

export default EngineeringNav