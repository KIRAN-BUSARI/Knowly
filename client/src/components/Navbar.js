import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className="relative">
                <div className="fixed top-0 left-0 right-0">
                    <div className="container mx-auto">
                        <nav className='flex bg-white justify-between'>
                            <div className="text-[#0095ff] flex text-sm font-bold md:text-2xl font-sans p-3 sm:text-xl">Knowly!</div>
                            <ul className='flex text-sm items-center text-[#0095ff]'>
                                <li><a className='p-3' href="#Home">Home</a></li>
                                <li><a className='p-3' href="#Courses">Courses</a></li>
                                <li><a className='p-3' href="#Communities">Communities</a></li>
                                <li><a className='p-3' href="#Career">Career</a></li>
                                <li><a className='p-3' href="#Features">Features</a></li>
                                <li><a className='p-3' href="#Contactus">ContactUs</a></li>
                                <a className='border-[1px] border-solid border-[#000] rounded-full px-2 bg-[#0095ff] text-[#fff] hover:bg-[#fff] hover:text-[#0095ff] hover:px-3 hover:py-1' href="/signin" target="_blank"><li><button>Sign-In</button></li></a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
