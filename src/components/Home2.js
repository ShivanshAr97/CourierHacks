import React from 'react'
import banner1 from '../banner/banner1.webp';
import banner2 from '../banner/banner2.webp';
import Newsletter from './Newsletter';
import Trending from './Trending';
import Fitness from './Fitness';
import Weight from './Weight';
import Follow from './Follow';
import MightLike from './MightLike';
import Footer from './Footer';
import Carousel from './Carousel';
import CarouselSide from './CarouselSide';

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