import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


function Header() {
  return (
    <div className='bg-slate-400 flex items-center justify-center '>
    <div className='w-[100rem] text-white'>
        <h2>Animations</h2>
    </div>
    <div className='w-[60rem] bg-orange-300 flex flex-col items-center'>
        <div className="w-full mb-2">
            <p className="block">Call or WhatsA</p>
        </div>
        <div className="flex items-center">
          <div>
          <FaWhatsapp className="mr-2" />

          </div>
          <div>
          <p>090898</p>

          </div>
        </div>
    </div>
</div>


  )
}

export default Header