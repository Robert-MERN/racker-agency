import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import useStateContext from '../../context/contextProvider';
import IconButton from '@mui/material/IconButton';


const SlideMenu = () => {
    const { menu, closeMenu } = useStateContext();



    const navLinks = ["home", "skills", "project"]
    // navigating to sections
    const navigateTo = (sec) => {
        document.getElementById(sec).scrollIntoView({ behavior: "smooth" })
    }


    return (
        <div className={` h-screen w-screen bg-transparent inset-0 fixed z-[60] ${menu ? "translate-x-0" : "translate-x-full"} transition-all duration-400`} >
            <div className='w-full h-full relative' >
                <div className=' w-[65vw] bg-zinc-800 h-full fixed right-0 px-2' >
                    <div onClick={closeMenu} className='text-gray-400 width-full px-2 py-2 flex justify-end items-center rounded-3xl hover:bg-zinc-700 mb-12' >
                        <IconButton className='text-white'>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    {navLinks.map((e, index) => (
                        <div key={index} onClick={() => { navigateTo(e); closeMenu() }} className='text-gray-400 width-full p-4  flex items-center bg-zinc-700 hover:bg-zinc-500 my-4 rounded-3xl border-b-1 border-zinc-700 text-19 capitalize transi' >

                            {e}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SlideMenu