import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors}=useContext(AppContext)
  return (
    <div className='flex flex-col  items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our  extensive list of trusted doctors</p>
        <div className='w-full  grid grid-cols-5  gap-4 pt-5 gap-y-6 px-3 sm:px-0 ' >
            {
                doctors.slice(0,10).map((items,index)=>(
                    <div key={index} onClick={()=>{navigate(`/appointment/${items._id}`);scrollTo(0,0)} } className='border border-blue-300 overflow-hidden rounded-xl hover:translate-y-[-10px]  transition-all duration-500   ' >
                        
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
        <button onClick={()=>{navigate('/doctor');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 rounded-full mt-10 px-9 p-3'>more</button>
    </div>
  )
}

export default TopDoctors