import { useState, useEffect } from "react";
import Vignette from "../Vignette/Vignette";
const port=import.meta.env.VITE_PORT
import "./main.css"

function Main() {

  const [data, setData] = useState(null);
  // const [photoData, setphotoData] = useState(null)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:${port}/meubles`);

      const jsonData = await response.json();

      // const photoResponse = await fetch("https://api.cloudinary.com/v1_1/dnzdkulto")
      // const jsonPhotoData = await photoResponse.json();

      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
 

  

  return (
  // <div id="main" className="grid flex justify-center gap-4 grid-cols-3 grid-rows-3">
  <div id="main" className="grid">

   {/* <div id="main" > */}
      {data ? (
        data.map((item) => (
          <Vignette key={item.id} nom={item.titre} prix={item.prix} photo={item.photo} id={item.id}
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
