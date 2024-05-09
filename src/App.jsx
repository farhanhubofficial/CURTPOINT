import { useState } from 'react'
import './App.css'
import curtains from './Components/data'
import Header from './Components/Header'
import LandPage from './Components/LandPage'
import Navbar from './Components/Navbar'


function App() {

  return (
    
    <div className=' w-[100%]'>
        {/* <header className=''>
        <Header/>
        </header> */}
        <Navbar/>
    
    

      {/* <div>
{curtains.map(item=>(
  <div className='flex'>
  <h1>{item.name}</h1> <img src= {item.image} alt="" />

  </div>



)
)
}
      </div> */}

      {/* <LandPage/> */}
    </div>
    
  )
}

export default App
