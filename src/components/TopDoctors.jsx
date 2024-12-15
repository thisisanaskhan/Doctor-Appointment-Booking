import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div className=''>
        <h1>Top Doctors To Book</h1>
        <p>Simply browse through our  extensive list of trusted doctors</p>
        <div >
            {
                doctors.slice(0,10).map((items,index)=>(
                    <div >
                        <div>
                            <img src={items.image} alt="" />
                        </div>
                        <div>
                            .Available
                        </div>
                        <div>
                        <p>{items.name}</p>
                        <p>{items.speciality}</p>
                        </div>
                        <button>more</button>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopDoctors