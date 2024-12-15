
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Header from './components/Header'


const App=()=> {
 

  return (
  
    <div className=' max-w-[1500px] mx-auto'>
      
    <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctor'element={<Doctor/>}/>
        <Route path='/doctor/:speciality' element={<Doctor/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      
    </div>
       
    
  )
}

export default App
