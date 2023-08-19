import React from 'react'

export default function CommunityPage() {
    return (
        <>
            <div className="container mx-auto">
                <h1 className="pt-[77px] font-serif text-3xl text-center font-bold text-[#ff7070]">Communities for <span className="text-[#0095ff] font-bold text-[45px]">You!</span></h1>
                <main className="main">
                    <section className="section1">
                        <ul className="flex pt-[30px] pb-[30px] list-none justify-around min-h-[40vh] text-center text-[30px]">
                            <li className="border-[2px] border-solid border-[#0095ff] rounded-2xl min-w-[28vw] text-[#0095ff] flex flex-col justify-end p-[10px] bg-cover bg-[url('./images/ml.png')]">Machine Learning Club!</li>
                            <li className="border-[2px] border-solid border-[#0095ff] rounded-2xl min-w-[28vw] text-[#0095ff] flex flex-col justify-end p-[10px] bg-cover bg-[url('./images/Ai.jpg')]">Artificial Intelligence Club!</li>
                            <li className="border-[2px] border-solid border-[#0095ff] rounded-2xl min-w-[28vw] text-[#0095ff] flex flex-col justify-end p-[10px] bg-cover bg-[url('./images/Startup.jpg')]">Start-up Club!</li>
                        </ul>
                        <ul className="flex pt-[30px] pb-[30px] list-none justify-around min-h-[40vh] text-center text-[30px]">
                            <li className="border-[2px] border-solid border-[#0095ff] rounded-2xl min-w-[28vw] text-[#0095ff] flex flex-col justify-end p-[10px] bg-cover bg-[url('./images/Finance.jpg')]">Finance Club!</li>
                            <li className="border-[2px] border-solid border-[#0095ff] rounded-2xl min-w-[28vw] text-[#0095ff] flex flex-col justify-end p-[10px] bg-cover bg-[url('./images/Webdevlopment.jpg')]">Web Development Club!</li>
                            <li className="border-[2px] border-solid border-[#0095ff] rounded-2xl min-w-[28vw] text-[#0095ff] flex flex-col justify-end p-[10px] bg-cover bg-[url('./images/VR-AR.jpg')]">VR/AR Club!</li>
                        </ul>
                    </section>
                </main>
            </div>
        </>
    )
}
