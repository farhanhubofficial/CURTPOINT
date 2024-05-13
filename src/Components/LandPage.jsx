
import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Header from './Header'
import Vision from './Vision'
import Approach from './Approach'

function LandPage() {
  return (
    <div>
      <Header/>
      <div className='sticky top-0 z-30'>
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element = {<Home/> } />
        <Route path="/About" element = {<About/> } />
        <Route path='/Vision' element= {<Vision/>}/>
        <Route path='/Approach' element= {<Approach/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default LandPage