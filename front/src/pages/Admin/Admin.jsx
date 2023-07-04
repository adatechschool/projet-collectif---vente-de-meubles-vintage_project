import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../../composants/Navbar/Navbar';
import Table from '../../composants/Table/Table';
import Footer from '../../composants/Footer/Footer'
// import produitsBDD from '../../data/produits';


const port = import.meta.env.VITE_PORT

function Admin() {
  
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("coucou")
      const response = await fetch(`http://localhost:${port}/meubles`);
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  return (
    <div>
      <Navbar/>
      {/* <Table items={data}/> */}
      {data ? (
        data.map((item) => (
          <Table key={item.id} nom={item.titre} prix={item.prix} photo={item.photo} id={item.id}
          
          />
         
        ))
      ) : (
        <p>Loading...</p>
      )}


      <Footer/>
    </div>
  )
}

export default Admin;