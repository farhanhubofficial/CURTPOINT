import React from 'react'
import HomeImage from "./Images/images.jpg";
import Hero from './Hero';
function Home() {
  return (
    <div className='  w-[94%] '>
        
            <img src= {HomeImage} alt=""  className='w-[100%] h-[40rem] '/>
            <Hero className = "absolute bottom-96"   />
        
    </div>
  )
}

export default Home