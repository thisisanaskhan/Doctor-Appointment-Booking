import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors,currency} = useContext(AppContext)

  const [docInfo,setDocInfo]=useState(null)
 
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const[docSlots,setDocSlots]=useState([])
  const[slotIndex,setSlotIndex]=useState(0)
  const[slotTime,setSlotTime]=useState('')

  const fetchDocInfo= async ()=>{

    const docInfo = doctors.find(doc => doc._id===docId)
    setDocInfo(docInfo)
   
    
  }

  const getAvailableSlots = async () => {

    setDocSlots([])
    let today = new Date()

    for(let i=0; i<7; i++){
      //getting date with index
      let currentDate =new Date(today)

      currentDate.setDate(today.getDate()+i)

      // setting end time 

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if (today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10?currentDate.getHours()+1:10)
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0)

      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots =[]
      while(currentDate < endTime){
        let formattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        //
        timeSlots.push({
          datetime: new Date(currentDate),
          time:formattedTime
        })

        //Increment current time by 30 min

        currentDate.setMinutes(currentDate.getMinutes()+30)
      }

      setDocSlots(prev => ([...prev,timeSlots]))
    }
    
  }
  useEffect(()=>{
    fetchDocInfo()

  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()

  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

 
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

    {/* ......BOOKING.......... */}
    <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
      <p>Booking Slot</p>
      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {
          docSlots.length && docSlots.map((item,index)=>(
            <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer  ${ slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}  >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))
        }
      </div>
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4' >
        {docSlots.length && docSlots[slotIndex].map((item,index)=>(
          <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime?'bg-primary text-white':'text-gray-600 border border-gray-200'}`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}

      </div>
      <button className='my-6 bg-primary text-white py-3 px-24 rounded-full'>Book Appointment</button>
    </div>
    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment