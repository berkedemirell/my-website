
import React from 'react'
import { Link } from 'react-router-dom'
import foto from '../sources/images/FrvlrTqWcAAZ9Ns.jpg'

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    }
  return (
    <div className='w-full h-fit flex flex-row items-center justify-around bg-gradient-to-r from-neutral-900 to-neutral-950 p-20 text-slate-200 relative'>
        <div className='w-28 h-24 flex items-center justify-start relative'>
            <p className='absolute text-3xl bottom-28 left-12'>&uarr;</p>
            <Link onClick={scrollToTop}><img src={foto} alt="" className='rounded-full transition-all duration-500 hover:scale-110'/></Link>
        </div>
        <div className='flex flex-col text-lg'>
            <Link to="https://www.linkedin.com/in/berke-demirel/" target='_blank' className='flex flex-row gap-5 items-center hover:text-red-600'>
                Linkedin
                <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
            <Link to="https://twitter.com/brkdmrl07" target='_blank' className='flex flex-row gap-5 items-center hover:text-red-600'>
                Twitter
                <ion-icon name="logo-twitter"></ion-icon>
            </Link>
            <Link className='flex flex-row gap-5 items-center hover:text-red-600'>
                Youtube
                <ion-icon name="logo-youtube"></ion-icon>
            </Link>
            <Link to="https://github.com/berkedemirell" target='_blank' className='flex flex-row gap-5 items-center hover:text-red-600'>
                Githup
                <ion-icon name="logo-github"></ion-icon>
            </Link>
            <Link to="https://www.twitch.tv/tombomb4dil" target='_blank' className='flex flex-row gap-5 items-center hover:text-red-600'>
                Twitch
                <ion-icon name="logo-twitch"></ion-icon>
            </Link>
        </div>
        <div className='flex flex-col gap-1'>
            <p>Adress: Sunset Boulevard, California</p>
            <p>Tel: 1234567890</p>
            <p>E-mail: berke@gmail.com</p>
        </div>
        <span className='absolute bottom-2 right-6 opacity-80 text-slate-100'>Berke Copyright &copy; 2023</span>
    </div>
  )
}

export default Footer