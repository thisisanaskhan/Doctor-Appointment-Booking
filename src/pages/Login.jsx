import React, { useState } from 'react'

const Login = () => {

  const [state,setState]=useState('Sign Up')

  const[email,setEmail]=useState('')
  const[pass,setPass]=useState('')
  const[name,setName]=useState('')

  const onSubmitHandler=async(event)=>{
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center '>
      <div className='flex flex-col items-start m-auto gap-3 p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm text-zinc-600 shadow-lg'>
      <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account":"Login"}</p>
      <p>Please {state === 'Sign Up' ? "sign up":"login"} to book appointment</p>
      {
        state === "Sign Up" && 
        <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text"  onChange={(e)=>setName(e.target.name)} value={name}/>

        </div>
      }
       
       <div className='w-full '>
       <p>E-mail</p>
       <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email"  onChange={(e)=>setEmail(e.target.name)} value={email}/>
       </div>
       <div className='w-full '>
       <p>Password</p>
       <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password"  onChange={(e)=>setPass(e.target.name)} value={pass}/>
       </div>

       <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account":"Login"}</button>
       {
        state === "Sign Up"
        ? <p>Already have an account?<span onClick={()=>{setState('Log In')}} className='text-blue-400 underline cursor-pointer'> Login here</span></p>
        : <p>Create an new account?<span onClick={()=>{setState('Sign Up')}}  className='text-blue-400 underline cursor-pointer'>Click here</span></p>
       }
      </div>

    </form>
  )
}

export default Login