import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function Produit() {

  let { id } = useParams()
  
  const [produitDetail, setproduitDetail] = useState({});


  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async () => {

    try {
      const response = await fetch(`http://localhost:4000/meubles/byId/${id}`);
      const jsonData = await response.json();

      console.log(jsonData);
      setproduitDetail(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
 

  return (
    <div >{produitDetail.titre}</div>
  )
}


export default Produit;