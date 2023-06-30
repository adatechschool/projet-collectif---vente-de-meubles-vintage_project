import React, { useState, useEffect } from "react";
import Vignette from "../Vignette/Vignette";
// import {produits} from '../../data/produits'
// function Main() {
//   const [meuble, setMeuble] = useState(null)
//   useEffect ( ()=>{
//     getMeubles()
//   }, [])

//   const getMeubles = async () => {
//     try {
//       console.log("ok")
//       const response = await fetch('http://localhost:7000/meubles');
//       const jsonMeuble = await response.json();
//       setMeuble(jsonMeuble);
//     } catch(error) {
//       console.log('je suis la')
//       console.log('Error', error);
//     }
//   }
//   console.log(meuble)
//   return (
//     <div id="main" className='flex flex-wrap min-h-screen'>
//   {
//         meuble.map(item => (
//           <Vignette
//             key={item.id}
//             nom={item.nom}
//             prix={item.prix}
//           />
//         ))
//       }

//       {/* {
//         produits.map(({ id, nom, prix }) => (
//           <Vignette
//             key={id}
//             nom={nom}
//             prix={prix}
//           />
//         ))
//       } */}
//     </div>
//   )
// }

// export default Main

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("try");
      const response = await fetch("http://localhost:7000/meubles");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("error");
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
