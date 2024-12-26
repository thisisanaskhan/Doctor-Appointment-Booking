import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center pt-10 text-2xl text-gray-500'>
        <p>CONTACT <span className='font-bold text-gray-700'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 text-sm justify-center'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-6  text-gray-700 justify-center items-start'>
          <p className='text-lg text-gray-600 font-medium'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station <br />Suite 350, Washington,USA</p>
        
          <p className='text-gray-500'>Tel:(415) 555-0132 <br />Email:greatstackdev@gmail.com</p>
          
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          <button className='border border-gray-400 p-3 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact