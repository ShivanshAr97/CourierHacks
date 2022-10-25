import React from 'react'
import logo from '../images/logo.png';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <>        
            <nav className='sticky bg-[#121212] top-0 z-50 border-b border-gray-600'>
                <div className='flex justify-between'>
                    <div className='flex cursor-pointer hover:text-num1 -mt-[0.20rem]'>
                    <Link to="/"><img className='mt-4 ml-4 mr-1 w-16 h-16' src={logo} alt="" /></Link>
                        <div>
                        <Link to="/"><p className='mt-[2.1rem] font-inter font-bold text-white '>Fit Blogs</p></Link>
                        </div>
                    </div>
                    
                    <ul className='flex -mt-1 mx-10'>
                        <li className=' ml-8 mr-2 mt-6 my-4 text-white px-2 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50 xx:invisible md:visible xl:visible' ><Link to="/fitness">Fitness</Link></li>
                        <li className=' mx-2 mt-6 my-4 px-2 text-white py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50 xx:invisible md:visible xl:visible  '><Link to="/healthyeating">Healthy Eating</Link></li>
                        <li className=' mx-2 mt-6 my-4 px-2 text-white py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50 xx:invisible md:visible xl:visible  '><Link to="/weightloss">Weight Loss</Link></li>
                        <li className=' mx-2 mt-6 my-4 px-2 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50 xx:invisible md:visible xl:visible text-white'><Link to="/wellness">Wellness</Link></li>
                        <li className=' mx-2 mt-6 my-4 px-2 text-white py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50 xx:invisible md:visible xl:visible  '><Link to="/healthymind">Healthy Mind</Link></li>
                        <li className=' mx-2 mt-6 px-2 my-4 text-white py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50 xx:invisible md:visible xl:visible  '><Link to="/behindscenes">Behind the Scenes</Link></li>
                        <li className=' mx-2 mt-6 px-2 my-4 text-white py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50 xx:invisible md:visible xl:visible  '><Link to="/engineering">Engineering</Link></li>
                    </ul>
                    <div className='flex'>
                        <button className="btn my-6 mr-2 px-3 py-1 border border-gray-600 rounded-md text-white"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <button className="btn flex text-white font-bold rounded-lg bg-num1 px-4 py-2 mr-6 my-6 text-sm m-1"> <Link to="/email"><i class="fa-solid fa-envelope"></i> &nbsp; Subscribe</Link></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar