import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >
      <div className='flex justify-center pt-10'>
        <p className='text-3xl text-gray-600'>ABOUT <span className='font-semibold text-black'>US</span></p>
      </div>
      <div className='flex flex-col md:flex-row gap-12 my-10'>
        <img  className=' w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
       
       <div className='flex flex-col gap-6 justify-center md:w-2/4 text-base text-gray-600'>
        <p  >Welcome To Prescripto,Your Trusted Partner In Managing Your Healtcare Needs Conviently And Efficiently.At Prescripto We Understand the challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.</p> 
        <p >Prescripto Is Committed To Excellence In Healthcare Technology We Continously Strive To Enhance Our Platform Integrating The Latest Advancements To Improve User Experienc And Deliver Superior Service Whether You're Booking Your First appointment Or Managing Ongoing Care Prescripto Is Here To support You Every Step Of the Way.</p> 
        <b className='text-gray-800'>Our Vision</b>
        <p >Our Vision At Prescripto Is To Create A Seamless Healthcare Experience For Every User.We Aim to Bridge The Gap Between Patients And Healthcare Providerds, Making It Easier For You To Access The Carw You Need When You Need It.</p>
      </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY  <span className='font-semibold text-gray-700'>CHOOSE US</span></p>
      </div>
     <div className='flex  flex-col md:flex-row mb-20'>
     <div className='border px-10 md:px-16  py-8 flex flex-col text-gray-700 text-[15px] gap-5 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer' >
        <b>EFFICIENCY</b>
        <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle</p>
      </div>
      <div className='border px-10 md:px-16  py-10 flex flex-col text-gray-700 text-[15px] gap-5 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer' >
      <b>CONVENIENCE</b>
      <p>Access To A Network Of Trusted Healthcare Professional,s In your Area</p>
      </div>
      <div className='border px-10 md:px-16  py-8 flex flex-col text-gray-700 text-[15px] gap-5 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer' >
      <b>PERSONALIZATION</b>
      <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health</p>
      </div>
     </div>
    </div>
  )
}

export default About