import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/Index'

function Exxample() {
  const {logos} = useContext(GlobalContext)
  console.log("logos1")
  return (
    <div>
      {
        logos.map(Item=>   {
          return (
          <img src= {Item.image} alt="" />
          )
        })
      }
    </div>
  )
}

export default Exxample