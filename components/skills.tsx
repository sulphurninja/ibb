import React from 'react'
import s from'../styles/skills.module.css'



const Skills = () => {
  return (
    <div className='bg-white text-black'>
      <div className='  mx-4 py-12 flex flex-row  text-sm md:text-3xl lg:text-3xl tracking-tight font-semibold'>
          <div className='leading-[1.15]'>
            <div className={s.skillText}>
            we're experts in samsung, <span className='text-red-500'>apple</span>,  <span className='text-amber-500'>xiaomi</span>, asus, <span className='text-blue-200'>oneplus</span>, etc every brand and every model's mobile <span className='text-yellow-400'>phone repair.</span><br/>
            
      
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills
