// Navbar.js
import React from "react";
import Logo from "./Images/Logo.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Router, Route, Link } from "react-router-dom";
// import './App.css'
const Navbar = () => {
  return (

    
   
    
 <section className="bg-slate-200 flex justify-around   h-44 w-[89%] pt-2 ml-28 ">
      
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
      </div>
      
      <nav className=" flex justify-between items-center absolute top-[8.5rem] bg-slate-300 h-20 w-[80%] text-2xl font-bold text-yellow-900 px-3 rounded-lg" >
  <Link to ="/">HOME</Link> 
  <Link to ="/">ABOUT US</Link> 
  <Link to ="/">CURTAINS</Link> 
  <Link to ="/">SHEARS</Link> 
  <Link to ="/">CARPETS</Link> 
  <Link to ="/">PILLOWS</Link> 
  <Link to ="/">DUVETS</Link>




</nav>
   
      
    </section>

  );
};

export default Navbar;
