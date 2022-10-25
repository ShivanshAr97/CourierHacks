import React from 'react'
import banner2 from '../banner/banner2.webp';
import Newsletter from './Newsletter.js';
import Trending from './Trending.js';
import Fitness from './Fitness.js';
import Weight from './Weight.js';
import Follow from './Follow.js';
import MightLike from './MightLike.js';
import Footer from './Footer.js';
import Carousel from './Carousel.js';
import CarouselSide from './CarouselSide.js';

const Home = () => {
    return (
        <div className='bg-[#121212]'>
            {/* <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner1} alt="" /> */}
            <div className='flex py-2'>
                <Carousel></Carousel>
                <CarouselSide></CarouselSide>
            </div>
            <img className='flex mx-auto my-6 w-11/12 rounded-lg cursor-pointer' src={banner2} alt="" />
            <Newsletter></Newsletter>
            <Trending></Trending>
            <Fitness></Fitness>
            <Weight></Weight>
            <Follow></Follow>
            <MightLike></MightLike>
            
            <Footer></Footer>
        </div>
    )
}

export default Home