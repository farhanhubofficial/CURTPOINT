import { useState } from "react";
import "./App.css";
import curtains from "./Components/data";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route,Routes } from "react-router-dom";
import Curts from "./Components/Curts";

function App() {
  return (
    <div className=" w-[100%] pl-32">
     
      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route path="/" element = {<Home/> } />
        <Route path="/About" element = {<About/> } />
      </Routes>

      {/* <LandPage/> */}
    </div>
  );
}

export default App;
