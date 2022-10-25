import React from 'react'

const Follow = () => {
    return (
        <>
            <div className='flex flex-col w-11/12 mx-auto my-6 border border-gray-600 p-4 bg-[#181818] rounded-lg'>

                <p className='font-bold text-xl border-b p-2 mx-auto text-white'>Follow us on</p>
                <div className='flex my-6 mx-auto'>
                <p className='font-semibold mx-2 cursor-pointer text-white '> <i class="rounded-full bg-black border-gray-600 p-4 mx-2 border fa fa-brands fa-instagram"></i> <span className='hover:text-num1'> Instagram</span></p>
                <p className='font-semibold mx-2 cursor-pointer text-white '> <i class="rounded-full bg-black border-gray-600 p-4 mx-2 border fa fa-brands fa-square-facebook"></i> <span className='hover:text-num1'> Facebook</span></p>
                <p className='font-semibold mx-2 cursor-pointer text-white '> <i class="rounded-full bg-black border-gray-600 p-4  mx-2 border fa fa-brands fa-youtube"></i> <span className='hover:text-num1'> Youtube</span></p>
                <p className='font-semibold mx-2 cursor-pointer text-white '> <i class="rounded-full bg-black border-gray-600 p-4 mx-2 border fa fa-brands fa-twitter"></i> <span className='hover:text-num1'> Twitter</span></p>
                <p className='font-semibold mx-2 cursor-pointer text-white '> <i class="rounded-full bg-black border-gray-600 p-4 mx-2 border fa fa-brands fa-linkedin"></i>  <span className='hover:text-num1'>Linkedin</span></p>
                </div>
            </div>
        </>
    )
}

export default Follow