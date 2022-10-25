import React from 'react'
import banner4 from '../banner/banner4.jpg';
import Follow from '../components/Follow';
import Footer from '../components/Footer';
import MightLike from '../components/MightLike';
import Newsletter from '../components/Newsletter';
import Trending from '../components/Trending';

const EatingNav = () => {
  return (
    <div className='bg-[#121212]'>
    <img className='flex mx-auto py-6 w-11/12' src={banner4} alt="" />
    <p className='text-xs text-white mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Healthy Eating</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62309bcb0f55ab5e36786845_Revised_Tea1300x860%20copy-min%20(1).jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </div>
  )
}

export default EatingNav