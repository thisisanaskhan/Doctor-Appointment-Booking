import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Doctor = () => {

  const {speciality} = useParams();
  const[filter,setFilter]=useState([]);
  const {doctors} = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter=()=>{
    if(speciality){
      setFilter(doctors.filter(doc => doc.speciality===speciality))

    }
    else{
      setFilter(doctors)
    }
    
  }
 useEffect(()=>{
  applyFilter()

 },[doctors,speciality])
  

  
  return (
    <div>
      <p className='text-lg text-gray-600 '>Browse through the Specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg`}>General Physician</p>
            <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg`}>Gynecologist</p>
            <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg`}>Dermatologist</p>
            <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg`}>Pediatricians</p>
            <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg`}>Neurologist</p>
            <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg`}>Gastroenterologist</p>
          </div>
          <div className='grid grid-cols-5 gap-4 gap-y-6'>
            {
              filter.map((items,index)=>(
                <div onClick={()=>navigate(`/appointment/${items._id}`)} className='border border-blue-300 overflow-hidden rounded-xl hover:translate-y-[-10px]  transition-all duration-500   ' >
                    
                        <img className='bg-blue-300' src={items.image} alt="" />
                    <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-green-400 text-center'>
                        <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                    </div>
                   
                    <p className='text-gray-900 text-lg font-medium '>{items.name}</p>
                    <p className='text-gray-600'>{items.speciality}</p>
                    </div>
                  

                </div>
            ))
        }   
            
          </div>
         </div>
    </div>
  )
}

export default Doctor