import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className='flex w-11/12 mx-auto border-gray-600 my-6 border p-20 rounded-lg'>

                <p className='w-1/2 font-bold text-2xl text-white px-5'>📬 Get a weekly dose of latest stories and useful tips directly in your inbox!</p>
                <div className='w-1/2 p-5'>
                    <input className='border text-sm w-8/12 py-3 px-7 bg-num2 rounded-lg hover:bg-white' type="text" name="" id="" placeholder='Email Address' />
                    <button className="btn text-white font-bold rounded-lg bg-num1 px-5 py-3 mx-5 text-sm hover:bg-red-500">Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Newsletter