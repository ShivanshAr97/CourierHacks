import React from 'react'
import banner5 from './banner/banner5.jpg';
import Follow from './components/Follow';
import Footer from './components/Footer';
import MightLike from './components/MightLike';
import Newsletter from './components/Newsletter';
import Trending from './components/Trending';

const FitnessNav = () => {
  return (
    <>
    <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner5} alt="" />
    <p className='text-xs mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Healthy Mind</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62a9a68014debfd5911ca621_BoxingForWeightLoss_08.jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </>
  )
}

export default FitnessNav