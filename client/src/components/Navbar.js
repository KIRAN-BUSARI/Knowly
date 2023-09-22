import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <div className="relative">
                <div className="fixed top-0 left-0 right-0 backdrop-blur-[10px] border-b-2 border-[#00000033]">
                    <div className="container mx-auto">
                        <nav className='flex bg-transparent box-border justify-between'>
                            <div className="text-[#0095ff] flex text-sm font-bold md:text-2xl font-sans p-3 sm:text-xl"><a href="/">Knowly!</a></div>
                            <ul className='flex text-sm items-center text-[#0095ffa4] hover:text-[#0095ff]'>
                                <li><a className='p-3' href="#Home">Home</a></li>
                                <li><a className='p-3 ' href="#Courses">Courses</a></li>
                                <li><a className='p-3 ' href="#Communities">Communities</a></li>
                                <li><a className='p-3 ' href="#Career">Career</a></li>
                                <li><a className='p-3 ' href="#Features">Features</a></li>
                                <li><a className='p-3 ' href="#Contactus">ContactUs</a></li>
                                <a className='border-[1px] border-solid border-[#000] rounded-full bg-[#fff] text-[#0095ff] hover:bg-[#0095ff] hover:text-[#fff] px-3 py-1' href="/signin" target="_blank"><li><button>Sign-In</button></li></a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
