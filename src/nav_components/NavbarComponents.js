import React from 'react'

import Follow from '../components/Follow.js';
import Footer from '../components/Footer.js';
import MightLike from '../components/MightLike.js';
import Newsletter from '../components/Newsletter.js';
import Trending from '../components/Trending.js';

const NavbarComponents = (props) => {
  return (
    <div className='bg-[#121212]'>
    <img className='flex mx-auto py-6 w-11/12 rounded-lg' src={props.img1} alt="" />
    <p className='text-xs text-white mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / {props.category}</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src={props.img2} alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </div>
  )
}

export default NavbarComponents