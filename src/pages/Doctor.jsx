import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Doctor = () => {

  const {speciality} = useParams();
  const[filterDoc,setFilterDoc]=useState([]);
  const[showFilter,setShowFilter]=useState(false)
  const {doctors} = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality===speciality))
    }
    else{
      setFilterDoc(doctors)
    }
    
  }
 
 useEffect(()=>{
  applyFilter()

 },[doctors,speciality])
  

  
  return (
    <div>
      <p className='text-lg text-gray-600 '>Browse through the Specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden $()`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> speciality === 'General physician' ? navigate('/doctor') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-17 border border-gray-600 rounded-lg  transition-all cursor-pointer ${speciality === "General physician" ?"bg-blue-200 text-black":" "} `}>General physician</p>
            <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctor'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600  rounded-lg transition-all cursor-pointer  ${speciality === "Gynecologist" ?"bg-blue-200 text-black":" "}`}>Gynecologist</p>
            <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctor'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg  transition-all cursor-pointer ${speciality === "Dermatologist" ?"bg-blue-200 text-black":" "}`}>Dermatologist</p>
            <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctor'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg transition-all cursor-pointer  ${speciality === "Pediatricians" ?"bg-blue-200 text-black":" "}`}>Pediatricians</p>
            <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctor'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded-lg  transition-all cursor-pointer ${speciality === "Neurologist" ?"bg-blue-200 text-black":" "}`}>Neurologist</p>

          </div>
          <div className='w-full grid grid-cols-5 gap-4 gap-y-6'>
            {
              filterDoc.map((items,index)=>(
                <div key={index} onClick={()=>navigate(`/appointment/${items._id}`)} className='border border-blue-300 overflow-hidden rounded-xl hover:translate-y-[-10px]  transition-all duration-500   ' >
                    
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