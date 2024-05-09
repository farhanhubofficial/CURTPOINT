import React from 'react'
import New  from './Images/New.jpg'
import { FaArrowDownLong } from "react-icons/fa6";
import New2 from './Images/Vintag-Floral.jpg'
import New3 from './Images/Vintag-Floral.jpg'
import New4 from './Images/classic-curtains.jpg'
import New5 from './Images/embroidered-sheer-curtains.jpg'
import New6 from './Images/embroidered-sheer-curtains.jpg'
import New7 from './Images/kids-room-curtains.jpg'
import New8 from './Images/lace-panel-curtains.jpg'
import New9 from './Images/Tie-Up Shade Curtains.jpg'
import New10 from './Images/ARR.png'

 


function Hero() {
  return (
    <div className='hero'>
        <div  className='relative'>
            <h4 className=' absolute top-[-10rem] left-[60rem] text-7xl font-bold'>New  <span className='flex text-yellow-800
            '>Arrivals <FaArrowDownLong /></span>     </h4> 
            
            <img src= {New10} alt="" className='ml-[37rem]' />
        </div>
        <div className='grid grid-cols-4 gap-y-2  w-[70%] ml-48'>
         <img src= {New2} alt="" className='bg-red-700 w-96' />
         <img src= {New4} alt="" className='bg-red-700 w-96' />
         <img src= {New2} alt=""  className='bg-red-700 w-96'/>
         <img src= {New5} alt="" className='bg-red-700 w-96'/>
         <img src= {New6} alt="" className='bg-red-700 w-96'/>
         <img src= {New8} alt="" className='bg-red-700 w-96'/>
         <img src= {New9} alt="" className='bg-red-700 w-96'/>
         <img src= {New2} alt="" className='bg-red-700 w-96'/>
         <img src= {New7} alt="" className='bg-red-700 w-96'/>
         <img src= {New2} alt="" className='bg-red-700 w-96'/>
         <img src= {New4} alt="" className='bg-red-700 w-96'/>
         <img src= {New6} alt="" className='bg-red-700 w-96'/>
        </div>
    </div>
  )
}

export default Hero