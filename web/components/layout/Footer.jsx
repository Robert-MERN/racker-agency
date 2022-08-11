import React, { useState } from 'react'
import colorSharp from "../../public/images/color-sharp.png";
import colorSharp2 from "../../public/images/color-sharp2.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Newsletter from '../sections/Newsletter';
import Fade from "react-reveal/Fade";


const Footer = () => {
  const icons = [
    {
      icon: <FacebookOutlinedIcon />,
      hoverIcon: <FacebookOutlinedIcon />,
      name: "icon-1",
      link: "https://www.facebook.com/rackeragency",
    },
    {
      icon: <LinkedInIcon />,
      hoverIcon: <LinkedInIcon />,
      name: "icon-2",
      link: "https://www.linkedin.com/in/chloe-jefferson-5735921a1",
    },
    {
      icon: <InstagramIcon />,
      hoverIcon: <InstagramIcon />,
      name: "icon-3",
      link: "https://www.instagram.com/rackeragencyofficial/",
    }
  ]
  const [hover, sethover] = useState({
    'icon-1': false,
    'icon-2': false,
    'icon-3': false,
  });
  // hover function
  const hoverIcon = (bool, key) => {
    sethover((prev) => ({ ...prev, [key]: bool }))
  }
  // navigating to sections
  const navigateTo = (sec) => {
    document.getElementById(sec).scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div style={{ backgroundImage: `url(${colorSharp.src})` }} className='w-screen h-700 md:h-400 lg:h-500 bg-no-repeat bg-black relative' >
      <Newsletter />
      <div style={{ backgroundImage: `url(${colorSharp2.src})` }} className='w-full h-full bg-no-repeat bg-right flex md:flex-row flex-col md:items-end  justify-end lg:py-16 lg:px-32 md:px-16 md:py-8 p-8 gap-12 md:gap-0' >
        <Fade left delay={400} >
          <div className="md:flex-1 flex items-end md:items-center justify-center md:justify-start">
            <p onClick={() => navigateTo("home")} className='text-white font-extrabold text-55 cursor-pointer select-none tracking-wider' >Racker</p>
          </div>
        </Fade>
        <Fade right delay={400} >
          <div className="md:flex-1 flex flex-col justify-center items-center md:items-end  gap-5">
            <div className='flex gap-3' >
              {/* icons */}
              {
                icons.map((i, index) => (
                  <a href={i.link} target="__blank" key={index} onMouseOver={() => hoverIcon(true, i.name)} onMouseLeave={() => hoverIcon(false, i.name)} className='w-50 h-50 relative rounded-full bg-glare overflow-hidden cursor-pointer border-1 border-white' >
                    <div className={`absolute inset-0 w-full h-full grid place-content-center text-white transition-all rounded-full duration-400 ${hover[i.name] ? "opacity-0" : "opacity-100"}`} >
                      {i.hoverIcon}
                    </div>
                    <div className={`absolute inset-0 w-full h-full grid place-content-center bg-white transition-all duration-300 rounded-full ${hover[i.name] ? "scale-1" : "scale-0"}`} >
                      {i.icon}
                    </div>
                  </a>
                ))}
            </div>
            <p className='text-gray-400 font-medium text-18 capitalize'>
              Copyright 2022. All Rights Reserved
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Footer