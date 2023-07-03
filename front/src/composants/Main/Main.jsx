import React, { useState, useEffect } from "react";
import Vignette from "../Vignette/Vignette";

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/meubles");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
  <div id="main" className="flex flex-wrap min-h-screen">
      {data ? (
        data.map((item) => (
          <Vignette key={item.id} nom={item.titre} prix={item.prix} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;
