import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store/Slices/Cart-slice";
import {removeFromCart} from  "./Store/Slices/Cart-slice";
function CurtainTile({ product }) {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state);

  function handleTocart() {
    dispatch(addToCart(product));
  }
  function handleRemove(){
    dispatch(removeFromCart(product.id))
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3  h-[364px] mt-10 ml-5 rounded-xl ">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover h-full w-full"
          />
          <h1>Name: {product.name} </h1>
          <h1>Price: {product.price} </h1>
          <h1> Material: {product.material} </h1>
          <button
            className="mt-9  bg-red-950 text-white"
            onClick={ cart.some(item => item.id === product.id) ? handleRemove : handleTocart}
          >
            {
              cart.some(item => item.id === product.id) ?  'Remove From Cart': '    Add To Cart'
            }
        
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurtainTile;
