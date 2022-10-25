import React from 'react'

const NewBlog = () => {
    function close(){
        let post = document.getElementById("post")

        post.style.display="none";
    }

    return (
        <>
            <div id='post'>
                <div className='flex fixed bottom-6 right-4 border border-gray-600 p-2 rounded w-1/4 bg-[#181818] z-10 drop-shadow-lg'>
                    <img className='h-16 w-16 rounded m-2 cursor-pointer' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62f38b5ed4e304a2b7a6dcc8_stamina1200.jpg" alt="" />
                    <div className='py-2 px-4'>
                        <p className='absolute top-1 right-2 text-gray-500 cursor-pointer' onClick={close}><i class="fa-solid fa-sm fa-xmark"></i></p>
                        <h1 className='text-sm font-bold hover:underlin text-white'>What Is Stamina And How To Increase Yours</h1>
                        <p className='text-xs text-gray-500 pt-2'> <i class="fa-solid fa-clock"></i>&nbsp; 4 min read</p>
                        <p className='absolute bg-red-500 -my-1 right-0 text-white text-xx uppercase font-bold px-2 py-1 rounded-tl rounded-br'>New Post</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewBlog