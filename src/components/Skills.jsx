
import React from 'react'
import cssp from '../sources/Skills/css.png'
import htmlp from '../sources/Skills/html.png'
import javascriptp from '../sources/Skills/javascript.png'
import reactp from '../sources/Skills/react.png'
import tailwindp from '../sources/Skills/tailwind.png'

export const Skills = () => {
  return (
    <div className='w-full h-fit bg-gradient-to-r from-neutral-900 to-neutral-950 p-14 border-t-2 border-b-2'>
        <div className='flex flex-row justify-between'>
            <img src={javascriptp} alt='' className='rounded-full opacity-50 w-40 h-40'/>
            <img src={htmlp} alt='' className='rounded-full opacity-50 w-40 h-40'/>
            <img src={cssp} alt='' className='rounded-full opacity-50 w-40 h-40'/>
            <img src={reactp} alt='' className='rounded-full opacity-50 w-40 h-40'/>
            <img src={tailwindp} alt='' className='rounded-full opacity-50 w-40 h-40'/>
        </div>
    </div>
  )
}

export default Skills