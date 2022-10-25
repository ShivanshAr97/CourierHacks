import React from 'react'
import BlogContent from './BlogContent'
import Fitness from './Fitness'
import Follow from './Follow'
import Footer from './Footer'
import MightLike from './MightLike'
import Newsletter from './Newsletter'

const Blog = () => {
  return (
    <div className='bg-[#121212]'>
    <img className='mx-12 py-4 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62fd3127b2161d1f38f1587f_creatine1300.jpg" alt="" />

    <p className='text-xs text-white mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Fitness / Creatine</span></p>

    <BlogContent></BlogContent>
    <Fitness></Fitness>
    <Newsletter></Newsletter>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </div>
    
    
  )
}

export default Blog