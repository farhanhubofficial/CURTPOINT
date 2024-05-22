import React from "react";
import { GlobalContext } from "../Context/Index";
import { useDispatch } from "react-redux";
import { Circles } from "react-loader-spinner";
import CurtainTile from "./CurtainTile";
import { useContext } from 'react'
import curtains from "./data";

function Curtains() {
  const {logos, loading, setLoading} = useContext(GlobalContext)


 
  

 

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
        <div className="min-h-[80vh] grid sm: grid-cols-2 md:grid-cols-3 space-x-5 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {logos && logos.length
            ? logos.map((productItem) => <CurtainTile product={productItem} />)
            : null}
        </div>
      )}

 

      <div></div>
    </div>
  );
}

export default Curtains;
