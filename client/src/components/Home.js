import React from 'react'
import Navbar from './Navbar'
import Courses from './Courses'
import Communities from './Communities'
import Career from './Career'
import Features from './Features'
import Footer from './Footer'
// import Chat from './Chat'
// import ChatboxApp from './Chat'
export default function Home() {
    return (
        <>
            <Navbar />
            <section className="container max-w-[80vw] mx-auto bg-gradient-to-br from" id="Home">
                {/* dark:bg-slate-950 dark:text-white add to above line for dark mode. */}
                <div className="flex items-center jus">
                    <div className="flex w-[50%] h-[60vh] justify-center flex-col">
                        <h1 className="my-[13px] font-sans font-bold text-2xl text-[#0095ff]">
                            Explore courses <span className="text-[#ff7070]">That You Love!</span>
                        </h1>
                        <p className='font-sans font-normal text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque voluptas fugiat magnam fuga. Ut necessitatibus impedit a veritatis nihil nesciunt illo placeat dolor facere. Earum totam minus adipisci hic.
                        </p>
                    </div>
                    <div className="w-[50%] h-[40vh] flex items-center">
                        <img className="h-[300px] pl-[100px]" src={require('../images/sideimg-removebg.png')} alt="logo" />
                    </div>
                </div>
            </section>
            {/* <ChatboxApp /> */}
            <hr />
            <Courses />
            <hr />
            <Communities />
            <hr />
            <Career />
            <hr />
            <Features />
            <hr />
            <Footer />
        </>
    )
}
