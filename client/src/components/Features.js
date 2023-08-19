import React from 'react'

export default function Features() {
    return (
        <>
            <div className="container mx-auto max-w-[80vw]" id='Features'>
                <h1 className="pt-[50px] pb-[20px] text-center text-[#0095ff] text-[2rem] font-[400] font-serif">Features of <span className="text-[#ff7070] font-bold text-[45px]">Knowly !</span></h1>
                <main className="min-h-[80vh]">
                    <div>
                        <ul className="flex px-[30px] py-[10px] list-none justify-around min-h-[30vh] text-[30px] text-center">
                            <li className="px-[10px] mx-2 items-center text-[#0095ff] min-w-[30vw] border-[2px] border-solid border-[#0095ff] rounded-[15px] flex flex-col justify-end" id="text"> <img className="h-[100px] w-[100px]" src={require('../images/Structured-courses.png')}
                                alt="logo" />
                                Structured Courses</li>
                            <li className="px-[10px] items-center mx-2 text-[#0095ff] min-w-[30vw] border-[2px] border-solid border-[#0095ff] rounded-[15px] flex flex-col justify-end"> <img className="h-[100px] w-[100px]" src={require('../images/liveclasses.png')} alt="logo" /> Well-curated
                                Live
                                Interactive Classes</li>
                            <li className="px-[10px] items-center mx-2 text-[#0095ff] min-w-[30vw] border-[2px] border-solid border-[#0095ff] rounded-[15px] flex flex-col justify-end"> <img className="h-[100px] w-[100px]" src={require('../images/hnadsonlearning.png')} alt="logo" /> Hands-on
                                Learning
                                Experience</li>
                        </ul>
                        <ul className="flex px-[30px] py-[10px] list-none justify-around min-h-[30vh] text-[30px] text-center">
                            <li className="px-[10px] items-center mx-2 text-[#0095ff] min-w-[30vw] border-[2px] border-solid border-[#0095ff] rounded-[15px] flex flex-col justify-end"> <img className="h-[100px] w-[100px]" src={require('../images/communities.png')} alt="logo" /> Interactive
                                Communities
                            </li>
                            <li className="px-[10px] items-center mx-2 text-[#0095ff] min-w-[30vw] border-[2px] border-solid border-[#0095ff] rounded-[15px] flex flex-col justify-end"> <img className="h-[100px] w-[100px]" src={require('../images/groupProjects.png')} alt="logo" /> Group
                                Projects that
                                fosters collaboration</li>
                            <li className="px-[10px] items-center mx-2 text-[#0095ff] min-w-[30vw] border-[2px] border-solid border-[#0095ff] rounded-[15px] flex flex-col justify-end"> <img className="h-[100px] w-[100px]" src={require('../images/careersupport.png')} alt="" /> Career Support
                            </li>
                        </ul>
                    </div>
                </main>
                <hr />
            </div>
        </>
    )
}
