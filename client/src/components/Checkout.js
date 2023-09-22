import React from 'react'

export default function Checkout() {
    return (
        <>
            {/* <div className="checkout-container"> */}
            {/* <div class="h-[100vh] flex justify-center items-center">
                <div className="h-[50vh] w-[20vw] bg-[#0095ff] rounded-3xl flex items-center justify-center">
                    <div className="bg-white h-[45vh] w-[19vw] p-10 rounded-2xl"></div>
                </div>
            </div> */}
            {/* </div> */}
            <div className="h-[100vh] flex items-center justify-center max-w-[80vw] mx-auto">
                <div className="w-[50%] bg-cyan-700 h-[50vh]">
                    {/* <img className='h-[300px] w-[500px]' src={require('')} alt="Course" /> */}
                    {/* <img className='h-[300px] w-[500px] flex justify-center items-center' src={require('../images/sideimg-removebg.png')} alt="Course" /> */}
                </div>
                <div className="w-[50%] bg-slate-300 h-[50vh] flex-col text-center">
                    {/* <h1 className='text-xl font-bold p-5 underline'>JOIN THE COURSE YOU LOVE</h1> */}
                    <p className='text-center p-3 items-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ipsam, laborum possimus dicta reiciendis adipisci cumque perspiciatis, nesciunt velit eligendi maxime architecto ipsa consequuntur laboriosam praesentium excepturi animi facere sit?</p>
                    <div className="flex mt-20 items-center justify-center "><button className='border-[2px] border-black rounded-lg p-2 px-5 bg-white text-[#0095ff] hover:text-white hover:bg-[#0095ff]
                    hover:shadow-black hover:shadow-md hover:translate-y-[-2px]'>Buy Now</button></div>
                </div>
            </div>
        </>
    )
}