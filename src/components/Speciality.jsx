import React from 'react'
import { assets } from '../assets/assets'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center mt-20'>
        <h1 className='text-3xl font-semibold'>Find by Speaciality</h1>
        <p className='text-gray-600 text-center sm:w-1/3 text-sm'>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 items-center pt-5 w-full overflow-scroll'>
           {
            specialityData.map((item,index)=>(

                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col text-xs justify-center items-center flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctor/${item.speciality}`}>
                <img className='w-24' src={item.image} alt="" />
                <p>{item.speciality}</p>
                </Link>
              
                
            ))
           }
        </div>
        </div>
  )
}

export default Speciality