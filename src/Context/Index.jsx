import { createContext, useState } from "react";

export const GlobalContext = createContext(null)



export default function GlobalState({children}){

const [searchParam ,setSearchParam] = useState('waryaa')
async function handleSubmit(event){
    event.preventDefault()
try{
const res  = await fetch(`http://localhost:3002/TotalCurtains?name_like=${encodeURIComponent(searchParam)}&material_like=${encodeURIComponent(searchParam)}`)
const data = await res.json()
console.log( "farar" ,  data)
}catch(e){

}
}

    return <GlobalContext.Provider value={ {searchParam ,setSearchParam, handleSubmit} }>{children}</GlobalContext.Provider>
}