import { useState, useEffect } from "react";
import Vignette from "../Vignette/Vignette";
import "./main.css"
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

function Main() {

  const [data, setData] = useState(null);
  // const [photoData, setphotoData] = useState(null)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${host}:${port}/meubles`);

      const jsonData = await response.json();

      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  

  return (
  // <div id="main" className="grid flex justify-center gap-4 grid-cols-3 grid-rows-3">
  <div id="main" className="grid bg-beige">

   {/* <div id="main" > */}
      {data ? (
        data.map((item) => (
          <Vignette key={item.id} nom={item.titre} prix={item.prix} photo={host+":"+port+"/images/"+item.photo} id={item.id}
          // <button onClick ={() => {navigate(`/produit/${item.id}`)}}/>
          />
         
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;
