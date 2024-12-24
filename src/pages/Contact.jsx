import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center my-10 text-3xl text-gray-700'>
        <p>CONTACT <span className='font-bold'>US</span></p>
      </div>
      <div className='flex flex-col md:flex-row gap-8 '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-y-4  text-gray-700 justify-center items-start'>
          <p className='text-2xl font-medium'>OUR OFFICE</p>
          <p>54709 Willms Station <br />Suite 350, Washington,USA</p>
        
          <p>Tel:(415) 555-0132 <br />Email:greatstackdev@gmail.com</p>
          
          <p>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>

          <button className='border border-gray-400 p-3'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact