import React, { useState, useEffect } from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import useStateContext from '../../context/contextProvider';
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const { openMenu, blur } = useStateContext();
  const navLinks = ["home", "skills", "project"]
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
  // navbar background function
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);

    }
  }

  // navigating to sections
  const navigateTo = (sec) => {
    document.getElementById(sec).scrollIntoView({ behavior: "smooth" })
  }


  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, []);
  return (
    <div className={`h-50 md:h-60 ${show ? "bg-navbar" : "bg-transparent"} z-50 w-screen flex items-center py-9 md:py-12 lg:py-16 px-6 lg:px-20 fixed top-0 right-0 left-0 transition-all duration-300 ${blur ? "blur-[5px]" : "blur-none"}`} >
      <div className='flex flex-1 items-center' >
        <Fade left >
          <p onClick={() => navigateTo("home")} className='text-white font-extrabold text-34 cursor-pointer select-none tracking-wider' >Racker</p>
        </Fade>
      </div>
      <div className='hidden lg:flex flex-1 items-center gap-9 justify-end' >
        {navLinks.map((e, index) => (
          <Fade key={index} top delay={200} >
            <div onClick={() => navigateTo(e)} className='py-1 select-none cursor-pointer border-b-4 rounded-sm text-gray-400 hover:text-gray-200 hover:border-gray-200 border-transparent transition-all duration-200' >
              <p className='capitalize font-medium text-18' >{e}</p>
            </div>
          </Fade>
        ))
        }

        <div className='flex gap-3' >
          {/* icons */}
          {
            icons.map((i, index) => (
              <Fade key={index} bottom delay={300} >
                <a href={i.link} target="__blank" onMouseOver={() => hoverIcon(true, i.name)} onMouseLeave={() => hoverIcon(false, i.name)} className='w-40 h-40 relative rounded-full bg-glare overflow-hidden cursor-pointer border-1 border-white' >
                  <div className={`absolute inset-0 w-full h-full grid place-content-center text-white transition-all rounded-full duration-400 ${hover[i.name] ? "opacity-0" : "opacity-100"}`} >
                    {i.hoverIcon}
                  </div>
                  <div className={`absolute inset-0 w-full h-full grid place-content-center bg-white transition-all duration-300 rounded-full ${hover[i.name] ? "scale-1" : "scale-0"}`} >
                    {i.icon}
                  </div>
                </a>
              </Fade>
            ))}
        </div>
        <Fade right >
          <button onClick={() => navigateTo("contact")} className='px-7 py-3 whitespace-nowrap border-2 border-gray-400 bg-glare text-white hover:text-gray-600 hover:bg-white text-17 font-semibold transition-all duration-300' >{"Let's Connect"}</button>
        </Fade>
      </div>
      <div className='flex lg:hidden items-center justify-end' >
        <div onClick={openMenu} className='bg-zinc-400 px-3 py-2 rounded-xl hover:bg-glare hover:text-white transition-all duration-300' >
          <MenuIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar