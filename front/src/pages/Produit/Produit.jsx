import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Vignette from '../../composants/Vignette/Vignette';

function Produit() {

  let { id } = useParams()
  
  const [produitDetail, setproduitDetail] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async () => {

    try {
      const response = await fetch(`http://localhost:5000/meubles/:${id}`);
      const jsonData = await response.json();

      setproduitDetail(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
 

  return (
      produitDetail.map((item) => (
      <Vignette key={item.id} nom={item.titre} 
      // <button onClick ={() => {navigate(`/produit/${item.id}`)}}/>
      />
     
    ))
  
  )
}


export default Produit;