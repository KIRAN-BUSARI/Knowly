import React from 'react'

export default function Payment() {
    return (

        <>
            <div className="h-[100vh] w-[100%] flex justify-center items-center">
                <div className="w-[25%] h-[60vh] pb-4 bg-slate-900 rounded-3xl">
                    <div className="w-[100%]">
                        <img className='rounded-3xl h-[50%]' src={require('../images/Webdevlopment.jpg')} alt="Course-img" />
                    </div>
                    <div className="h-[50%] w-[100%] rounded-3xl flex-col">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur veritatis sunt libero dicta architecto quaerat, recusandae distinctio nisi corrupti, quasi, repellendus eos aperiam iure quod. Asperiores sed quia nulla alias.</p>
                        <button className='px-5 py-3 rounded-3xl bg-slate-50 mb-4 hover:bg-[#0095ff] hover:text-[#fff] hover:shadow-md hover:shadow-white'><a href="/payment/web-pay">Buy Now</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
