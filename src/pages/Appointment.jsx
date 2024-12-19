import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const {docId} = useParams()
  const [docInfo,setDocInfo]=useState(null)
  const {doctors,currency} = useContext(AppContext)

  const fetchDocInfo= async ()=>{

    const docInfo = doctors.find(doc => doc._id===docId)
    setDocInfo(docInfo)
    
  }
  useEffect(()=>{
    fetchDocInfo()

  },[doctors,docId])

 
  return  docInfo && (
    <div className='mt-5'>
      {/* ..............Doctor detail.................... */}
      
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
        <img src={docInfo.image} className='bg-blue-300 rounded-lg' alt="" />
      </div>

      {/* ........Doctor info............. */}
      <div className='flex-1 border border-gray-600 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0'>
        <p className='flex items-center gap-2 font-medium text-2xl text-gray-900'>{docInfo.name}
           <img className='w-5 ' src={assets.verified_icon} alt="" /></p>
        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
          <p>{docInfo.degree}-{docInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
        </div>

        {/* .........About Doctors....... */}
        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p className='text-gray-500 font-medium mt-4'>Appointment fee : <span className='text-gray-600'>{currency}{docInfo.fees}</span></p>
        
      </div>
    </div>
    </div>
  )
}

export default Appointment