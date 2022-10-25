import React from 'react'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Newsletter = () => {
    const [sub, setSub] = useState('Subscribe')

    function Subscribed() {
        setSub(`Done :)`)
    }
    return (
        <>
            <div className='flex w-11/12 mx-auto border-gray-600 my-6 border p-20 rounded-lg'>

                <p className='w-1/2 font-bold text-2xl text-white px-5'>📬 Get a weekly dose of latest stories and useful tips directly in your inbox!</p>
                <div className='w-1/2 p-5'>
                    <input className='border text-sm w-8/12 py-3 px-7 bg-num2 rounded-lg hover:bg-white' type="text" name="" id="" placeholder='Email Address' />
                    <button onClick={Subscribed} className="btn text-white font-bold rounded-lg bg-num1 px-5 py-3 mx-5 text-sm hover:bg-red-500">{sub}</button>
                </div>
            </div>
        </>
    )
}

export default Newsletter