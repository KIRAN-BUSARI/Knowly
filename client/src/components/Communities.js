import React from 'react'

export default function Communities() {
    return (
        <>
            <div className="container max-w-[80vw] mx-auto">
                <section className="justify-around min-h-[100vh]" id="Communities">
                    <h2 className='pt-[20px] pb-[20px] text-center text-[2rem] font-[600] font-serif text-[#0095ff]'>Communities</h2>
                    <div className="flex">
                        <div className="justify-center max-h-[80vh] flex text-[40px] min-w-[50%] pl-[50px] pt-[80px] flex-col">
                            <h2 className="text-[#0095ff] font-serif font-bold">Become a part of the <span className="text-[59px] text-[#ff7070] font-bold">community you are interested in!</span></h2>
                            <div className="flex gap-[20px]">
                                <a href=""><button className="px-4 py-2 text-base text-[#fff] bg-[#0095ff] rounded-[40px] list-none ">Join Now!</button></a>
                                <a href=""><button className="px-4 text-base py-2 text-[#fff] bg-[#0095ff] rounded-[40px] list-none">Explore Courses!</button></a>
                            </div>
                        </div>
                        <div className="max-h-[80vh] min-w-[50%] flex">
                            <img className="h-[500px] pt-[120px] pl-[120px]" src={require("../images/communityImg.png")} alt="communityimg" />
                        </div>
                    </div>
                </section>
            </div>
            <hr />
        </>
    )
}
