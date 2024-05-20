import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../Context/Index";
import { useDispatch } from "react-redux";
import { Circles } from "react-loader-spinner";
import CurtainTile from "./CurtainTile";

function Curtains() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const [logos, setLogos] = useState([]);
  async function FetchLogs() {
    setLoading(true);
    const res = await fetch("http://localhost:3002/TotalCurtains");
    const data = await res.json();
    if (data) {
      setLoading(false);
      setLogos(data);
    }
  }

  useEffect(() => {
    // Fetch the data from JSON Server
    FetchLogs();
  }, []);

 

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
