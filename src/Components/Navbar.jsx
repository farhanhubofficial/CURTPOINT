// Navbar.js
import React from "react";
import Logo from "./Images/Logo.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Router, Route, Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useState } from "react";

// import './App.css'
const Navbar = () => {
  const [HrMenu, setHrMenu] = useState('')

  function handleHomeHr(){
    setHrMenu('Home')
  }
  function handleAboutHr(){
    setHrMenu('About')
  }
  function handleCARPETSHr(){
    setHrMenu('Carpets')
  }
  function handleCurtainsHr(){
    setHrMenu('Curtains')
  }
  function handleDUVETSHr(){
    setHrMenu('Duvets')
  }
  function handleSHEARSHr(){
    setHrMenu('Shears')
  }
  function handlePILLOWSHr(){
    setHrMenu('Pillows')
  }



  return (

    <div >
       <div className="bg-slate-200 flex justify-around   h-24 w-[94%] pt-2 ">
      
      <div className="flex justify-around  items-start h-44 w-[100%] ">
      <div className="flex items-center justify-between px-4 py-2 ">
        <div></div>
        <div className="flex items-center">
          <img
            src={Logo}
            alt=""
            className="rounded-full w-12 h-12 bg-black mr-2"
          />
          <h2 className="text-white text font-roboto font-bold text-3xl ">
            {" "}
            <span className="text-black">CURT</span>
            <span className="text-yellow-800">POINT</span>
          </h2>
        </div>
        {/* Add other navbar items here */}
      </div>
      <div className="flex items-center justify-between">
      <div className="w-24 h-20 flex items-center border border-solid border-red-800 justify-center rounded-2xl hover:border-purple-950 hover:bg-slate-800 hover:text-white">
  <FaLocationDot className="text-4xl w-96 text-yellow-800 hover:text-white   h-12" />
</div>


        <h2 className="ml-2">
          <span className="block ml-[-5rem] text-yellow-800 font-bold">
            GROUND FLOOR
          </span>
          <span className="block font-bold">NJEWA BUSINESS CENTRE</span>
          <span className="ml-[-3rem] font-bold">NAKURU TOWN CBD</span>
        </h2>
      </div>
          

<div className='flex items-center justify-between hover:'>
        <div className='
        w-24 h-20  flex items-center border border-solid border-red-800 justify-center rounded-2xl  hover:bg-slate-800 '>
        <MdEmail className="text-4xl w-96 text-yellow-800 hover:text-white    h-12"/>
        </div>
        <h2 className='ml-2'>
        <span className='block ml-[-3rem] text-yellow-800 font-bold'>SEND US AN EMAIL</span>
          <span className='block font-bold'>farhanali0757@gmail.com</span>
        
        </h2>
      </div>


      <button className="bg-yellow-800 mr-4 h-20 text-white rounded-2xl w-44">
        <span><h2>
          CALL US ON
          </h2></span>
          <span>
            <p>+ 254757068601</p>
          </span>
      </button>
      <div className="relative  rounded-2xl flex justify-center  mr-3 items-center w-36 ">
      <BsCart className="mt-7 font-bold text-5xl mr-6 text-yellow-800  "/>
      <p className="absolute bottom-4 left-12 font-bold">56</p>
      </div>
      
      </div>
  
 

    </div>

<div>
  
</div>
    <nav className=" flex justify-between items-center sticky top-0   bg-slate-200 h-16 w-[94%] text-2xl font-bold text-yellow-900   px-" >
  <Link to ="/" onClick={handleHomeHr}>HOME <hr className= {HrMenu=== "Home"  ?"border-none w-[80%] h-[3px] bg-black" :""}  /> </Link> 
  <Link to ="/About" onClick={handleAboutHr} >ABOUT US <hr className= {HrMenu=== "About"  ?"border-none w-[80%] h-[3px] bg-black" :""}  /></Link> 
  <Link to ="/Curtains" onClick={handleCurtainsHr}>CURTAINS <hr className= {HrMenu=== "Curtains"  ?"border-none w-[80%] h-[3px] bg-black" :""}  /></Link> 
  <Link to ="/Shears" onClick={handleSHEARSHr}>SHEARS <hr className= {HrMenu=== "Shears"  ?"border-none w-[80%] h-[3px] bg-black" :""}  /></Link> 
  <Link to ="/Carpets" onClick={handleCARPETSHr}>CARPETS <hr className= {HrMenu=== "Carpets"  ?"border-none w-[80%] h-[3px] bg-black" :""}  /></Link> 
  <Link to ="/Pillows" onClick={handlePILLOWSHr}>PILLOWS <hr className= {HrMenu=== "Pillows"  ?"border-none w-[80%] h-[3px] bg-black" :""}  /></Link> 
  <Link to ="/Duvets" onClick={handleDUVETSHr}>DUVETS <hr className= {HrMenu=== "Duvets"  ?"border-none w-[80%] h-[3px] bg-black" :""}  /></Link>
</nav>


    </div>
      
            


  );
};

export default Navbar;
