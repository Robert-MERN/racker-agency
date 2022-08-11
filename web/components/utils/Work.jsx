import React, { useState } from 'react';
import Image from "next/image"


const Work = ({ img, desc, title }) => {
    const [hover, sethover] = useState(false)
    const effect = (bool) => {
        sethover(bool)
    }
    return (
        <div className='relative bg-white rounded-3xl md:w-520 md:h-380 lg:w-350 lg:h-230 w-350 h-230 border-1 border-white flex justify-center items-center overflow-hidden cursor-pointer' onMouseOver={() => effect(true)} onMouseLeave={() => effect(false)} >
            <div className={`absolute inset-0 duration-300 z-30 bg-project-gradient transition-all ${hover ? "translate-y-0" : "-translate-y-full"}`} >

            </div>
            <div className='w-full h-full flex justify-center items-center' >
                <Image src={img} objectFit="cover" />
            </div>
            <div className={`absolute inset-0 flex flex-col justify-center transition-all items-center gap-2 px-12 duration-500 z-40 ${hover ? "translate-y-0" : "translate-y-full"}`} >
                <p className='text-center font-bold text-white text-25' >Business Deal</p>
                <p className='text-center font-medium text-white text-16 italic' >This the mind blowing Project</p>
            </div>

        </div>
    )
}

export default Work