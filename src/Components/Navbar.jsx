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
  const [HrMenu, setHrMenu] = useState("");
  const [About, SetAbout] = useState(false);
  function handleHomeHr() {
    setHrMenu("Home");
  }
  function handleAboutHr() {
    setHrMenu("About");
  }
  function handleCARPETSHr() {
    setHrMenu("Carpets");
  }
  function handleCurtainsHr() {
    setHrMenu("Curtains");
  }
  function handleDUVETSHr() {
    setHrMenu("Duvets");
  }
  function handleSHEARSHr() {
    setHrMenu("Shears");
  }
  function handlePILLOWSHr() {
    setHrMenu("Pillows");
  }
  // function MouseOveer(){
  //   console.log('hey')
  // }
  function MouseMoeve() {
    SetAbout(true);
  }
  function MouseLeave() {
    SetAbout(false);
  }

  return (
    <div className="relative">
      <nav className=" flex justify-between items-center sticky top-0   bg-slate-200 h-16 w-[94%] text-2xl font-bold text-yellow-900   px-">
        <Link to="/" onClick={handleHomeHr}>
          HOME{" "}
          <hr
            className={
              HrMenu === "Home" ? "border-none w-[80%] h-[3px] bg-black" : ""
            }
          />{" "}
        </Link>
        <div
          className=" "
          
        >
        <div className="relative" onMouseLeave={MouseLeave}
          onMouseMove={MouseMoeve}>
        <Link to="/About" onClick={handleAboutHr}>
            ABOUT US
            <hr
              className={
                HrMenu === "About" ? "border-none w-[80%] h-[3px] bg-black" : ""
              }

            />
          </Link>
          <div className={ About ?" bg-slate-200 h-80 w-[270%] left-[-3rem] absolute flex flex-col p-3": "hidden "}>
         <Link className=" border-b-2 border-solid border-yellow-800" to= '/Vision'> <h1 className="my-8">Vission, Mission And Core  <span className="">Values</span></h1></Link> 
      <Link className="border-b-2 border-solid border-yellow-800 " to= '/Approach'><h1 className="ml-[-8.7rem]  my-9">Our Approach</h1></Link>    
       <Link className="mt-5"><h1>Our  Product And Services</h1></Link>   
          
        

          </div>
        </div>
          
        </div>
        <Link to="/Curtains" onClick={handleCurtainsHr}>
          CURTAINS{" "}
          <hr
            className={
              HrMenu === "Curtains"
                ? "border-none w-[80%] h-[3px] bg-black"
                : ""
            }
          />
        </Link>
        <Link to="/Shears" onClick={handleSHEARSHr}>
          SHEARS
          <hr
            className={
              HrMenu === "Shears" ? "border-none w-[80%] h-[3px] bg-black" : ""
            }
          />
        </Link>
        <Link to="/Carpets" onClick={handleCARPETSHr}>
          CARPETS{" "}
          <hr
            className={
              HrMenu === "Carpets" ? "border-none w-[80%] h-[3px] bg-black" : ""
            }
          />
        </Link>
        <Link to="/Pillows" onClick={handlePILLOWSHr}>
          PILLOWS{" "}
          <hr
            className={
              HrMenu === "Pillows" ? "border-none w-[80%] h-[3px] bg-black" : ""
            }
          />
        </Link>
        <Link to="/Duvets" onClick={handleDUVETSHr}>
          DUVETS{" "}
          <hr
            className={
              HrMenu === "Duvets" ? "border-none w-[80%] h-[3px] bg-black" : ""
            }
          />
        </Link>
      </nav>

     
      
     
    </div>
  );
};

export default Navbar;
