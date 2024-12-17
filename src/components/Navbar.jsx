import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const [showMenu , setShowMenu]=useState(false);
  const [token,setToken]=useState(true);
  return (
   
     <div className='flex justify-between items-center py-4 border-b-2 border-gray-400 text-sm'>
      <img onClick={()=>navigate('/')} src={assets.logo} className='cursor-pointer' />
      <ul className='hidden md:flex items-start gap-6 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li> 
          <hr className='border-none outline-none h-0.5 w-3/2 bg-primary m-auto hidden ' />
        </NavLink>
        <NavLink to='/doctor'>
          <li className='py-1 '>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 w-3/2 bg-primary m-auto hidden' />
        </NavLink>
        <NavLink to='about'>
          <li className='py-1 '>ABOUT</li>
          <hr className='border-none outline-none h-0.5 w-3/2 bg-primary m-auto hidden' />
        </NavLink>
        <NavLink to='contact'>
          <li className='py-1 '>CONTACT</li>
          <hr className='border-none outline-none h-0.5 w-3/2 bg-primary m-auto hidden' />
        </NavLink>
      </ul>
      <div >
        {
          token
          ?
          <div className='flex gap-2 items-center cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 py-14 text-base font-medium text-gray-600 hidden group-hover:block'>
              <div className='flex flex-col gap-4 rounded bg-stone-100 min-w-48 p-4'>
                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>LogOut</p>
              </div>
            </div>
          </div>

          :<button onClick={()=>navigate('/Login')} className='bg-primary p-3 px-8 rounded-3xl text-white font-semibold hidden md:block'>Create Account</button>

        }
        
      </div>
    </div>
    
  )
}

export default Navbar