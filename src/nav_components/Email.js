import React from 'react'
import Starter from '../images/Starter.png'
import { Link } from "react-router-dom"
import { useState } from 'react'

const Email = () => {
    const [sub, setSub] = useState('Subscribe')

    function Subscribed() {
        setSub(`Done :)`)
    }

  return (
    <>
      <div id='mail' className='flex justify-center bg-[#121212] p-8'>
        <img className='w-[30%] rounded-tl-lg rounded-bl-lg' src={Starter} alt="" />
        <div className=' w-1/2'>
          <p className='absolute right-[15.5rem] text-white cursor-pointer'><Link to="/"><i class="fa-solid fa-xl fa-xmark"></i></Link></p>
          <div className='bg-[#181818] px-12 py-28 w-11/12 rounded-br-lg rounded-tr-lg'>
            <p className='text-center text-2xl'>📬</p>
            <p className='font-bold text-white text-2xl text-center'>Get The Fit Blogs Newsletter</p>
            <p className='text-sm py-6 text-gray-500 text-center font-semibold'>Make health & fitness your top priority with tips on workouts, healthy eating, wellness and more, straight from the experts.</p>
            <div className='text-center'>
              <input className='border text-sm py-3 px-7 bg-num2 duration-300 rounded-lg hover:bg-white' type="text" name="" id="" placeholder='Email Address' />
              <button onClick={Subscribed} className="btn text-white font-bold rounded-lg bg-num1 px-5 py-3 mx-4 text-sm hover:bg-red-500">{sub}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Email