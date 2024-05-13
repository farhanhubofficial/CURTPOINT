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
import curtains from "./data";


 


function Hero() {
  return (
    <div className='hero'>
        <div  className='relative'>
            <h4 className=' absolute top-[-10rem] left-[60rem] text-7xl font-bold'>New  <span className='flex text-yellow-800
            '>Arrivals <FaArrowDownLong /></span>     </h4> 
          
            
            <img src= {New10} alt="" className='ml-[37rem]' />
        </div>
        <div className='grid grid-cols-4   w-[87%] ml-20 bg-slate-200 rounded-xl items-center pl-3 py-3' >
       
         {
          curtains.map(item=>(
            <div className='bg-slate-50 mt-2 w-[20.7rem]'> 
<div className='  rounded p-3 w-80    border-yellow-800 h-96 '>
            <img src= {item.image} className='h-56  border   w-[96%]'/> 
               <h4 className='text-yellow-800 text-xl font-bold'>{item.name}</h4>
               <h3 className='text-yellow-800 text-xl font-bold'> <span className='font-bold font-roboto text-xl'>Color:</span> <span className='text-yellow-800 text-xl'>{item.color}</span></h3>
               <h6 className='text-yellow-800 text-xl font-bold'>Price:{item.price}</h6>
               <h6 className='text-yellow-800 text-xl font-bold'>Size:{item.size}</h6>
               <h5 className='text-yellow-800 text-xl font-bold'>Material:{item.material}</h5>
            </div>
          <button className='bg-black h-14 w-20 rounded- font-bold  text-white'> <span className='block'>ADD TO CARTS <span>+</span></span> </button>
            </div>
  
            
            
            
          )

          )
         }
        </div>
    </div>
  )
}

export default Hero