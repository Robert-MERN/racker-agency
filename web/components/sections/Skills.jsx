import React, { useRef } from 'react'
import Image from "next/image";
import colorSharp from "../../public/images/color-sharp.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import meter1 from "../../public/images/meter1.svg";
import meter2 from "../../public/images/meter2.svg";
import meter3 from "../../public/images/meter3.svg";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";


const Skills = () => {
  const slideRef = useRef();
  const slide = [
    {
      img: meter1,
      service: "Web Development"
    },
    {
      img: meter2,
      service: "Logo Design"
    },
    {
      img: meter1,
      service: "Graphic Design"
    },
    {
      img: meter3,
      service: "Video Editing"
    },
    {
      img: meter3,
      service: "Animation"
    },
    {
      img: meter2,
      service: "Content Writing"
    },
  ]

  const PrevBtn = () => {
    return (
      <button onClick={() => slideRef.current.slickPrev()} style={{ left: "40px", top: "50%", transform: "translate(-50%, -50%)" }} className='text-white absolute h-40 md:h-50 rounded-full  w-40 md:w-50 grid place-items-center  bg-black-trans hover:bg-glare transition-all' >
        <NavigateBeforeIcon />
      </button>
    )
  }
  const NextBtn = () => {
    return (
      <button onClick={() => slideRef.current.slickNext()} style={{ right: "0", top: "50%", transform: "translate(-50%, -50%)" }} className='text-white absolute h-40 md:h-50 rounded-full w-40 md:w-50 grid place-items-center  bg-black-trans hover:bg-glare transition-all' >
        <NavigateNextIcon />
      </button>

    )
  }
  const Btn = () => {
    return (
      <button className='hidden' >click</button>
    )
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    nextArrow: <Btn />,
    prevArrow: <Btn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{ backgroundImage: `url(${colorSharp.src})` }} className='w-screen lg:h-800 md:h-700 h-800 flex justify-center items-center bg-no-repeat bg-cover bg-left' >
      <div className='w-full h-full relative' >
        <div id="skills" style={{ left: "50%", transform: "translate(-50%, -50%)" }} className='flex flex-col top-80 md:top-52 top items-center px-4 md:px-8 lg:px-52 gap-4 py-20 bg-zinc-900 rounded-5xl absolute w-full md:w-650 lg:w-1400'>
          <Flip>
            <h1 className='text-gray-200 font-bold text-38 lg:text-55 text-center tracking-wide' >Skills</h1>
          </Flip>
          <Fade right >
            <p className='text-gray-400 font-medium text-18 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe unde ducimus facilis repellendus impedit at iure. Provident excepturi optio quasi ipsam repudiandae eligendi eveniet facilis, beatae corrupti perspiciatis voluptate.
            </p>
          </Fade>
          <Zoom delay={400} >
            <div className='w-full lg:w-800 mt-14 relative' >
              <div >
                <Slider ref={slideRef} autoplay={true} {...settings} >
                  {slide.map((each, index) => (
                    <div key={index} className='flex flex-col justify-center items-center' >
                      <div className='w-full flex justify-center mb-2' >
                        <Image src={each.img} width="140" height="140" objectFit='contain' />
                      </div>
                      <p className='capitalize text-gray-400 font-medium text-21 lg:text-23 text-center' >{each.service}</p>
                    </div>
                  ))
                  }
                </Slider>
                <PrevBtn />
                <NextBtn />
              </div>
            </div>
          </Zoom>

        </div>
      </div >
    </div >
  )
}

export default Skills