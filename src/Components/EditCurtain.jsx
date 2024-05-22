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

function EditCurtain({setVisible , product}) {
    const [cartInfo, setcartInfo] = useState(initialState);
    useEffect(()=>{
        fetchCurtains()

    },[])


const fetchCurtains = async () => {
    try{
const response = await axios.get('http://localhost:3002/TotalCurtains/' + product.id )
if (response){
    console.log(response.data)
    setcartInfo(response.data)
}
    }catch(e){
        console.log(e)
    }
}



const EditExistCurtain = async ()=>{
    try{
      const response =  await axios.put('http://localhost:3002/TotalCurtains/'+ product.id,cartInfo) ;
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
        <input type="text" placeholder='Enter the Name' value={cartInfo.name} onChange={e=>setcartInfo({...cartInfo,name:e.target.value
        })} />
        </div>
        <div>
        <h1>id:</h1>
        <input type="text" placeholder='Enter the id' value={cartInfo.id} onChange={e=>setcartInfo({...cartInfo, id:e.target.value

})}/>
        </div>
        <div>
        <h1>Price:</h1>
        <input type="text" placeholder='Enter the Price' value={cartInfo.price}  onChange={e=>setcartInfo({...cartInfo,price:e.target.value

})}/>
        </div>
        <div>
        <h1>Color:</h1>
        <input type="text" placeholder='Enter the Color' value={cartInfo.color} onChange={e=>setcartInfo({...cartInfo,color:e.target.value

})} />
        </div>
        <div>
        <h1>Size:</h1>
        <input type="text" placeholder='Enter the Size' value={cartInfo.size} onChange={e=>setcartInfo({...cartInfo,size:e.target.value

})}/>
        </div>
        <div>
        <h1>Material:</h1>
        <input type="text" placeholder='Enter the Material' value={cartInfo.material} />
        </div>
        <div>
        <h1>Image:</h1>
        <input type="text" placeholder='Enter the Image' value={cartInfo.image}  onChange={e=>setcartInfo({...cartInfo,material:e.target.value

})} />
        </div>
        <button onClick={()=>{
EditExistCurtain()
setVisible(false)
        }}>Update Curtain</button>
    </div>
  )
}

export default EditCurtain


// 