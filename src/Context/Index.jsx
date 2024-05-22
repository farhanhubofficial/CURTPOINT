import { createContext, useState ,useEffect } from "react";

export const GlobalContext = createContext(null)



export default function GlobalState({children}){
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
  

    return <GlobalContext.Provider value={ {setLogos, logos, loading, setLoading , FetchLogs} }>{children}</GlobalContext.Provider>
}