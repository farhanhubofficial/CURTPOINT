import React, { useState } from "react";
import { GlobalContext } from "../Context/Index";
import { useDispatch } from "react-redux";
import { Circles } from "react-loader-spinner";
import CurtainTile from "./CurtainTile";
import { useContext } from 'react'
import curtains from "./data";
import ProductTile from "./ProductTile";
import { Dialog } from 'primereact/dialog';
import AddNewCart from "./AddNewCart";

function ProductList() {
  const {logos,setLogos, loading, setLoading ,FetchLogs } = useContext(GlobalContext)
const [Visible, setVisible] = useState(false)

 
  function handleDelete(id){
 setLogos(logos.filter((product)=> product.id !== id))
  }

 

  return (
    <div>


      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
    
     <div className="relative">
      <button className="font-bold text-xl absolute left-[18.3rem] top-2 p-1 rounded-lg h-9 bg-red-600 " onClick={()=>setVisible(true)}>Add More Curtain</button>
        <div className="min-h-[80vh] grid sm: grid-cols-2 md:grid-cols-3 space-x-5 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {logos && logos.length
            ? logos.map((productItem) => <ProductTile product={productItem} onDelete = {()=>handleDelete(productItem.id)} />)
            : null}
        </div>
        </div>
      )}

 

<Dialog header="Add New User" visible={Visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} className="bg-red-600">
  <AddNewCart setVisible ={setVisible} FetchLogs ={FetchLogs()}  />
</Dialog>  


  </div>
  );
}

export default ProductList;
