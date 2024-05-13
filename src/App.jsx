import { useState } from "react";
import "./App.css";
import curtains from "./Components/data";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route,Routes } from "react-router-dom";
import Curts from "./Components/Curts";
import Footer from "./Components/Footer";
import LandPage from "./Components/LandPage";

function App() {
  return (
    <div className=" w-[100%] pl-32 relative">
     
      {/* <Navbar /> */}
      {/* <Home /> */}
<LandPage/>
     
      {/* <Footer  /> */}

      {/* <LandPage/> */}
    </div>
  );
}

export default App;
