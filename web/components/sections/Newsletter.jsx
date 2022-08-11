import React from 'react'
import Fade from "react-reveal/Fade";

const Newsletter = () => {
  return (
    <div id="skills" style={{ left: "50%", transform: "translate(-50%, -50%)" }} className='flex lg:flex-row flex-col top-36 lg:top-10 md:top-10 top items-center px-4 md:px-8 lg:px-36 gap-4 py-10 lg:py-20 bg-white rounded-3xl md:rounded-5xl absolute w-full md:w-650 lg:w-1400'>
      <div className="flex-1 lg:pr-16">
        <Fade top cascade >
          <p className='font-semibold text-gray-700 w-full text-34 md:text-38 lg:text-46 md:leading-50 lg:text-left text-center' >Subscribe to our News letter & Never miss latest updates</p>
        </Fade>
      </div>
      <div className="flex-1 flex">
        <Fade right >
          <div className='border-1 border-purple-500 rounded-3xl p-2 w-full flex justify-between gap-3 caret-purple-500' >
            <input
              spellCheck="false"
              placeholder='Email'
              className='border-none outline-none px-4 py-3 md:py-5 font-semibold text-gray-600 w-full text-19'
              type="email"
            />
            <button className={`bg-purple-600 text-white text-19 px-6 md:px-20 py-3 md:py-5 rounded-2xl md:rounded-3xl hover:bg-purple-400 transition-all duration-300 select-none`} >Submit</button>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Newsletter