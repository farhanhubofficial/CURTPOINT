import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store/Slices/Cart-slice";
import {removeFromCart} from  "./Store/Slices/Cart-slice";
import { Dialog } from "primereact/dialog";
import EditCurtain from "./EditCurtain";
import axios from "axios";

function ProductTile({ product, FetchLogs }) {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state);

  function handleTocart() {
    dispatch(addToCart(product));
  }
  const [Visible, setVisible] = useState(false)

const DeleteCurtain = async () =>{
  try{
    const response = await axios.delete('http://localhost:3002/TotalCurtains/' + product.id);
    if(response){
      FetchLogs
    }

  }catch (e){
    console.log(e)
  }
}
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3  h-[364px] mt-10 ml-5 rounded-xl ">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover h-full w-full"/>
          <h1>Nam: {product.name} </h1>
          <h1>Price: {product.price} </h1>
          <h1> Material: {product.material} </h1>

          <div className="flex flex-col w-32">
          <button
            className="mt-9  bg-red-950 text-white "
            onClick={()=>{
              console.log(product.id)
              setVisible(true)
            }
              }
          >
            Update Product
        
          </button>
          <button
            className="mt-9  bg-red-950 text-white"
            onClick={ DeleteCurtain}
          >
            Delete Product
        
          </button>
          </div>
        
        </div>
      </div>

      <Dialog header="Update Curtain" visible={Visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} className="bg-red-600">
  <EditCurtain product={product}   setVisible = {setVisible}/>
</Dialog>


    </div>
  );
}

export default ProductTile;
