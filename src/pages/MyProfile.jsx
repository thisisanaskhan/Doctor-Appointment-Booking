import React, { useState } from 'react'
import{assets} from '../assets/assets'

const MyProfile = () => {
  const[userData,setUserData]=useState({
    name:"Edward Vincent",
    image: assets.profile_pic,
    email:'richardjames@gmail.com',
    phone:'+1 123 456 7890',
    address:{
      line1:"57th Cross,Richmond",
      line2:"Church Road,London"
    },
    gender:'Male',
    dob:'2000-01-20'
    
  })
  const[isEdit,setIsEdit]=useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />
      
      isEdit
      ?<input type='text' onChange={e => setUserData(prev=>)}/>
      :<p>{userData.name}</p>

    </div>
  )
}

export default MyProfile