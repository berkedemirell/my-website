import React from 'react'
import { Link } from 'react-router-dom'
// import { TextAnimation } from '../textAnimation.js'
import { HeaderAnimation } from '../utils/headerAnimation.js'

export const Home = () => {
    const handleScroll = () => {
        const element = document.getElementById("about");
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
  return (
    <div className={`w-full h-screen bg-code-gif bg-cover bg-no-repeat flex flex-row p-2 justify-between relative`} id='home'>
        <div className='p-10 flex flex-col gap-4 justify-center items-start absolute right-0 top-40'>
            <h1 className='text-3xl text-neutral-50'>Hi, I am <HeaderAnimation/> Trying to be a web developer.</h1>
            <span className='text-xl ml-auto mr-6'><Link onClick={handleScroll} className='underline text-neutral-100'>For more information... &darr;</Link></span>
        </div>
        {/* <div className='w-full h-full flex justify-center opacity-30'>
            {<img src={code} alt='code' className='h-full w-4/4 rounded-xl'/>}
        </div> */}
    </div>
  )
}

export default Home