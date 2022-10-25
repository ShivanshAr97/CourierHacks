import React from 'react'
import logo from "../images/logo.png"
import apple from "../images/apple.svg"
import google from "../images/googleplay.svg"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className='flex mx-12 mt-16 justify-between'>
    <div className='flex w-1/3 flex-col'>
        <div className='flex'>
            <Link to="/">
            <img className='w-16 mr-2 -my-3 cursor-pointer' src={logo} alt="" />
            </Link>
            <Link to="/">
            <p className=' text-lg my-1 font-bold cursor-pointer text-white'>Fit Blogs</p>
            </Link>
        </div>
        <div>
            <p className='my-4 text-gray-500 text-sm'>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free. #BeBetterEveryDay</p>
        </div>
        <a target="_blank" href="https://apps.apple.com/in/app/cure-fit/id1217794588">
        <img className='w-2/5 my-2 cursor-pointer text-gray-500' src={apple} alt="" /></a>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=fit.cure.android&hl=en_IN">
        <img className='w-2/5 my-2 cursor-pointer text-gray-500' src={google} alt="" />
        </a>
    </div>

    <div className='flex w-1/4 flex-col'>
        <div className='flex'>
            <p className=' text-lg my-1 text-white font-bold'>Categories</p>
        </div>
        <div className='my-5'>
            <p className='border-y border-gray-500 text-white cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2 hover:text-black'><Link to="/fitness">Fitness</Link></p>
            <p className='border-y border-gray-500 text-white cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2 hover:text-black'><Link to="/healthyeating">Healthy Eating</Link></p>
            <p className='border-y border-gray-500 text-white cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2 hover:text-black'><Link to="/weightloss">Weight Loss</Link></p>
            <p className='border-y border-gray-500 text-white cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2 hover:text-black'><Link to="/wellness">Wellness</Link></p>
            <p className='border-y border-gray-500 text-white cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2 hover:text-black'><Link to="/healthymind">Healthy Mind</Link></p>
            <p className='border-y border-gray-500 text-white cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2 hover:text-black'><Link to="/behindscenes">Behind the Scenes</Link></p>
            <p className='border-y border-gray-500 text-white cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2 hover:text-black'><Link to="/engineering">Engineering</Link></p>
        </div>
    </div>

    <div className='flex w-1/4 flex-col'>
        <div className='flex'>
            <p className=' text-lg my-1 font-bold text-white'>Newsletter</p>
        </div>
        <div>
            <p className='my-8 text-gray-500'>📬 Join 1000+ subscribers and get new stories straight to your inbox</p>
            <div>
                    <input className='border text-sm py-3 px-7 mb-4 bg-num2 rounded-lg w-full hover:bg-white hover:duration-300' type="text" name="" id="" placeholder='Email Address' />
                    <button className="btn text-white font-bold rounded-lg bg-num1 w-full px-5 py-3 my-2 text-sm hover:bg-red-500 hover:duration-300">Subscribe</button>
                </div>
        </div>
        <p className='font-semibold text-sm cursor-pointer text-white hover:text-num1 hover:duration-200'>Fitness Glossary</p>
    </div>
    </div>
    </>
  )
}

export default Footer