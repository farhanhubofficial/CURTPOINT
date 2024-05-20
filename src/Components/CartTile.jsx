import React from "react";
import { removeFromCart } from "./Store/Slices/Cart-slice";
import { useDispatch } from "react-redux";

function CartTile({ cartItem }) {
const dispatch = useDispatch()

    function handleRemove(){
     dispatch(removeFromCart(cartItem.id))
      }

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 rounded-xl ">
        <div className="flex p-3 ">
          <img src={cartItem.image} alt="" className="h-40 w-40 rounded-lg" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold"> {cartItem.name} </h1>
            <p  className="text-xl text-white font-extrabold"> Ksh {cartItem.price} </p>
          </div>
        </div>
        <div>
        <button
            className="mt-9  bg-red-950 text-white"
            onClick={ handleRemove}
          >
           Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartTile;
