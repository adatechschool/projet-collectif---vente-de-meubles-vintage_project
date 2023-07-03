import React from 'react'
import Navbar from '../../composants/Navbar/Navbar';
import Table from '../../composants/Table/Table';
import Footer from '../../composants/Footer/Footer'
import { produits } from '../../data/produits';
import { useEffect, useState } from 'react';
const port=import.meta.env.VITE_PORT


function Admin() {

  const [data, setData] = useState(null);
  // const [photoData, setphotoData] = useState(null)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:${port}/testmeubles`);

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
      {data ? (
        data.map((item) => (
          <Table key={item.id} nom={item.titre} prix={item.prix} photo={item.photo} id={item.id}
          // <button onClick ={() => {navigate(`/produit/${item.id}`)}}/>
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