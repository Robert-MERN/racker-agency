import React, { useState, useEffect } from 'react'
import Image from "next/image";
import bgImage from "../../public/images/banner-bg.png"
import Space from "../../public/images/header-img.svg"
import arrow1 from "../../public/images/arrow2.svg"
import style from "../../styles/Home.module.css"
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer", "Content Writer", "Video Editor", "Graphic Designer", "Logo Designer", "Animator"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const navigateTo = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div id="home" style={{ backgroundImage: `url(${bgImage.src})` }} className='bg-no-repeat bg-center w-screen min-h-screen lg:h-screen bg-section-1 px-8 lg:px-44' >
      <div className='flex h-full w-full flex-col-reverse lg:flex-row' >
        <div className="flex-1 flex py-6 lg:pt-24 justify-center  items-center lg:items-start flex-col gap-8">
          <Fade top >
            <div className='px-7 w-300 justify-center items-center flex py-3 whitespace-nowrap border-2 border-gray-400 bg-glare text-white  bg-btn-gradient  text-17 font-semibold transition-all duration-300' >{"Welcome to Racker-Agency"}</div>
          </Fade>
          {/* Tracking Text */}
          <Fade right >
            <h1 className='text-gray-300 font-bold text-38 overflow-hidden lg:h-140 h-[150px] md:text-55 leading-45 md:leading-60 w-full text-center lg:text-left lg:w-550 transition-all duration-400' >{`Hi! I'm Muneeb ${text}`}</h1>
          </Fade>
          {/* paragraph */}
          <Fade left >
            <p className='w-full text-center lg:text-left lg:w-550 text-gray-400 font-medium text-18' >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam itaque ducimus ipsa obcaecati sunt minus expedita vitae sint, consequuntur dolorem voluptates distinctio. Ratione, quis repellat hic dicta qui sequi molestias.
            </p>
          </Fade>

          {/* connect button */}
          <Fade left delay={300}  >
            <div onClick={navigateTo} className='px-7 mt-8 gap-4 w-250 justify-center items-center flex py-3 whitespace-nowrap border-2 border-transparent cursor-pointer hover:border-gray-400 bg-transparent hover:bg-glare text-white text-17 font-semibold transition-all duration-300' ><p className='select-none' >{"Let's Connect"}</p>

              <div className={`h-25 border-2 rounded-full border-white w-25 grid place-items-center`} >
                <Image src={arrow1} width="8" height="8" objectFit="contain" />
              </div>
            </div>
          </Fade>
        </div>
        <div className="flex-1 pt-24 flex justify-center items-center">
          <div className={`md:w-500 xl:w-600 ${style.move}`} >
            <Zoom>
              <Image src={Space} objectFit="contain" />
            </Zoom>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Banner

