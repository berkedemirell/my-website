
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../sources/images/thumbbig-481903 (1).png'

export const Navbar = () => {

    const [stickyClass, setStickyClass] = useState("");
    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar)
    });

    const stickyNavbar = () => {
        if(window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed z-10 h-14 opacity-90') : setStickyClass("");
        }
    }

    const handleScroll = () => {
        const element = document.getElementById("about");
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
    const handleScroll2 = () => {
        const element = document.getElementById("work");
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
    const handleScroll3 = () => {
        const element = document.getElementById("contact");
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
    const handleScroll4 = () => {
        const element = document.getElementById("education");
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
  return (
    <div className={`w-full flex flex-row justify-between p-6 items-center bg-neutral-900 text-slate-50 text-xl ${stickyClass}`}>
        <div className='w-20'><Link><img src={logo} alt="" className='rounded-full transition duration-500  ease-in-out transform hover:scale-110'/></Link></div>
        <div className=''>
            <ul className='w-90 flex flex-row items-center mr-6 gap-24'>
                <li><Link onClick={handleScroll} className='hover:text-red-700 transition duration-500 ease-in-out'>About</Link></li>
                <li><Link onClick={handleScroll2} className='hover:text-red-700 transition duration-500 ease-in-out'>My works</Link></li>
                <li><Link onClick={handleScroll4} className='hover:text-red-700 transition duration-500 ease-in-out'>Education</Link></li>
                <li><Link onClick={handleScroll3} className='hover:text-red-700 transition duration-500 ease-in-out'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar