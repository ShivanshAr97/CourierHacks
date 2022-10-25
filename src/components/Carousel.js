import React from 'react'
import {Link} from "react-router-dom"

const Carousel = () => {
    return (
        <>
            <Link to="/blog"><img className='w-11/12 rounded-lg my-4 ml-12 cursor-pointer' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62f38b5ed4e304a2b7a6dcc8_stamina1200.jpg" alt="" /></Link>
        </>
    )
}

export default Carousel