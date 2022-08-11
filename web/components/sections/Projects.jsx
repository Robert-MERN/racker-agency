import React, { useState } from 'react'
import Work from '../utils/Work'
import project1 from "../../public/images/project-img1.png";
import project2 from "../../public/images/project-img2.png";
import project3 from "../../public/images/project-img3.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Projects = () => {

  const [hover, sethover] = useState({
    'tab-1': false,
    'tab-2': false,
    'tab-3': false,
  });
  // hover function
  const hoverIcon = (bool, key) => {
    sethover((prev) => ({ ...prev, [key]: bool }))
  }


  return (
    <div id="project" className='w-screen min-h-screen px-8 lg:px-24 md:pt-24 md:pb-24 pb-12' >
      <div className='flex flex-col justify-center items-center gap-8' >
        <Zoom>
          <h1 className='text-gray-200 font-bold text-38 md:text-55 text-center tracking-wide' >Projects</h1>
        </Zoom>
        <Fade right >
          <p className='text-gray-400 font-medium text-18 text-center w-full lg:w-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe unde ducimus facilis repellendus impedit at iure. Provident excepturi optio quasi ipsam repudiandae eligendi eveniet facilis, beatae corrupti perspiciatis voluptate.
          </p>
        </Fade>
        <Fade left delay={300} >
          <div className='w-full lg:w-800 rounded-full flex border-1 border-gray-500 overflow-hidden lg:mb-4 text-14 md:font-16' >
            <div onMouseOver={() => hoverIcon(true, "tab-1")} onMouseLeave={() => hoverIcon(false, "tab-1")} className='flex-1 flex justify-center items-center text-gray-200 py-2  lg:py-4 text-center font-semibold tracking-widest cursor-pointer overflow-hidden relative' >
              <div className={`absolute transition-all duration-300 inset-0 bg-btn-gradient-2 z-30 ${hover["tab-1"] ? "translate-x-0" : "-translate-x-full"}`} ></div>
              <p className='z-40' >Tab 1</p>
            </div>
            <div onMouseOver={() => hoverIcon(true, "tab-2")} onMouseLeave={() => hoverIcon(false, "tab-2")} className='flex-1 flex justify-center items-center text-gray-200 border-gray-500 border-r-1 border-l-1 py-2 lg:py-4 text-center font-semibold tracking-widest cursor-pointer  overflow-hidden relative' >
              <div className={`absolute transition-all duration-300 inset-0 bg-btn-gradient-2 z-30 ${hover["tab-2"] ? "translate-y-0" : "translate-y-full"}`} ></div>
              <p className='z-40' >Tab 2</p>
            </div>
            <div onMouseOver={() => hoverIcon(true, "tab-3")} onMouseLeave={() => hoverIcon(false, "tab-3")} className='flex-1 flex justify-center items-center text-gray-200 py-2 lg:py-4 text-center  font-semibold tracking-widest cursor-pointer overflow-hidden relative' >
              <div className={`absolute transition-all duration-300 inset-0 bg-btn-gradient-2 z-30 ${hover["tab-3"] ? "translate-x-0" : "translate-x-full"}`} ></div>
              <p className='z-40' >Tab 3</p>
            </div>
          </div>
        </Fade>
        <div className='flex-wrap flex justify-center items-center gap-8 w-full md:w-600 lg:w-1200' >
          <Work img={project1} />
          <Work img={project2} />
          <Work img={project3} />
          <Work img={project3} />
          <Work img={project1} />
          <Work img={project2} />
        </div>
      </div>
    </div>
  )
}

export default Projects