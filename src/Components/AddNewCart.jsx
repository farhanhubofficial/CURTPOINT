import React, { useEffect, useState } from 'react'
import axios from 'axios'

const initialState ={
    name: '',
      id: ""  ,
      price:  "",
      color: '',
      size: '',
      material: '',
      image: ""
}

function AddNewCart({setVisible}) {
    const [cartInfo, setcartInfo] = useState(initialState);
    useEffect(()=>{

    },[])

const addNewcart = async ()=>{
    try{
      const response =  await axios.post('http://localhost:3002/TotalCurtains',cartInfo) ;
      if(response){
        console.log(response)
      }
    }
    catch(e){
console.log(e)
    }
}

  return (
    <div>
        <div>
        <h1>Name:</h1>
        <input type="text" placeholder='Enter the Name' onChange={e=>setcartInfo({...cartInfo,name:e.target.value

        })} />
        </div>
        <div>
        <h1>id:</h1>
        <input type="text" placeholder='Enter the id'  onChange={e=>setcartInfo({...cartInfo, id:e.target.value

})}/>
        </div>
        <div>
        <h1>Price:</h1>
        <input type="text" placeholder='Enter the Price'  onChange={e=>setcartInfo({...cartInfo,price:e.target.value

})}/>
        </div>
        <div>
        <h1>Color:</h1>
        <input type="text" placeholder='Enter the Color' onChange={e=>setcartInfo({...cartInfo,color:e.target.value

})} />
        </div>
        <div>
        <h1>Size:</h1>
        <input type="text" placeholder='Enter the Size'  onChange={e=>setcartInfo({...cartInfo,size:e.target.value

})}/>
        </div>
        <div>
        <h1>Material:</h1>
        <input type="text" placeholder='Enter the Material' />
        </div>
        <div>
        <h1>Image:</h1>
        <input type="text" placeholder='Enter the Image'  onChange={e=>setcartInfo({...cartInfo,material:e.target.value

})} />
        </div>
        <button onClick={()=>{
addNewcart()
setVisible(false)
        }
        
        
        


        }>Add New Curtain</button>
    </div>
  )
}

export default AddNewCart