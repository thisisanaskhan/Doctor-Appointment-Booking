import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mt-5 flex flex-col md:flex-row flex-wrap  bg-primary rounded-lg md:px-10 lg:px-20'>  
        {/* -------left----- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'> 
            <p className='lg:text-5xl md:text-4xl sm:text-3xl font-semibold text-white leading-tight md:leading-tight lg:leading-tight' >Book Appointment <br />With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-4 font-semibold text-white'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule your appointment hassle-free.</p>

            </div>
            <a href="#speciality" className='flex gap-2  bg-white p-3 rounded-3xl text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >Book appointment <img className='w-3'  src={assets.arrow_icon}/></a>

        </div>
        {/* -------right----- */}
        <div className='md:w-1/2 relative' >
            <img className='w-full  md:absolute bottom-0 rounded-lg h-auto' src={assets.header_img} alt="" />

        </div>
    </div>
  )
}

export default Header