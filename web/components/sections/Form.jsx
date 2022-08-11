import React, { useState } from 'react'
import Image from "next/image";
import contactImg from "../../public/images/contact-img.svg"
import style from "../../styles/Home.module.css"
import useStateContext from '../../context/contextProvider';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Form = () => {
  const { data, handleChange, handleSubmit } = useStateContext();
  return (
    <div className='px-8 py-14 md:pt-24 md:pb-32 lg:px-24 w-screen min-h-screen lg:h-screen bg-btn-gradient-2' >
      <div className='w-full h-full flex flex-col lg:flex-row gap-4' >
        <div className='flex-1 flex items-center' >
          <div className={`flex justify-center items-center ${style.move}`} >
            <Zoom delay={200} >
              <Image src={contactImg} objectFit="contain" />
            </Zoom>
          </div>
        </div>
        <form id="contact" onSubmit={handleSubmit} className="flex-1 flex flex-col lg:px-20 items-center gap-4">
          <div className='flex w-full justify-start mb-2 lg:mb-4' >
            <Fade top>
              <h1 className='text-gray-200 font-bold text-34 md:text-65 text-left capitalize' >Get in touch</h1>
            </Fade>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <Fade left >
              <input
                type="text"
                name="firstName"
                placeholder='First Name'
                spellCheck="false"
                className='bg-glare px-8 py-6 text-white text-17 tracking-wider outline-none rounded-3xl w-full  capitalize border-1 border-gray-400'
                required
                onChange={handleChange}
                value={data.firstName}
              />
            </Fade>
            <Fade right >
              <input
                type="text"
                name="lastName"
                placeholder='Last Name'
                spellCheck="false"
                className='bg-glare px-8 py-6  text-white text-17 tracking-wider outline-none rounded-3xl w-full capitalize border-1 border-gray-400'
                required
                onChange={handleChange}
                value={data.lastName}
              />
            </Fade>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <Fade left >
              <input
                type="email"
                name="email"
                placeholder='Email'
                spellCheck="false"
                className='bg-glare px-8 py-6 text-white text-17 tracking-wider outline-none rounded-3xl w-full border-1 border-gray-400'
                required
                onChange={handleChange}
                value={data.email}
              />
            </Fade>
            <Fade right >
              <input
                type="phone"
                name="phoneNo"
                placeholder='Phone No'
                spellCheck="false"
                className='bg-glare px-8 py-6  text-white text-17 tracking-wider outline-none rounded-3xl w-full border-1 border-gray-400'
                required
                onChange={handleChange}
                value={data.phoneNo}
              />
            </Fade>
          </div>
          <Fade bottom delay={300} >
            <textarea
              name="message"
              placeholder='Message'
              spellCheck="false"
              cols="30"
              rows="30"
              className='bg-glare px-8 py-6 text-white text-17 tracking-wider h-180 lg:h-250 resize-none outline-none rounded-4xl w-full  normal-case border-1 border-gray-400'
              required
              onChange={handleChange}
              value={data.message}
            >
            </textarea>
          </Fade>
          <div className='flex justify-start w-full my-6 lg:my-8' >
            <Fade bottom delay={400}>
              <button type='submit' className='px-12 py-4 whitespace-nowrap border-none font-bold hover:bg-glare hover:text-white text-gray-600 bg-white text-17  transition-all duration-300' >Send</button>
            </Fade>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Form