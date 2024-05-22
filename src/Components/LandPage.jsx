
import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Header from './Header'
import Vision from './Vision'
import Approach from './Approach'
import Curtains from './Curtains'
import Cart from './Cart'
import ProductList from './ProductList'
// import ProductLists from './ProductLists'

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
        <Route  path='/Curtains'   element = {<Curtains/>} />
        <Route path='/cart' element ={<Cart/>}  />
        <Route path='/ProductList' element = {<ProductList/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default LandPage