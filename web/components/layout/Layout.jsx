import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer"
import SlideMenu from './SlideMenu';
import useStateContext from '../../context/contextProvider';
import Loader from '../utils/Loader';
const Layout = ({ children }) => {
  const { blur, load } = useStateContext();
  return (
    <div>
      <SlideMenu />
      <Navbar />
      {load &&
        <Loader />
      }
      <div className={`${blur ? "blur-[5px]" : "blur-none"} transition-all duration-200`} >
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout