import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Vignette from '../../composants/Vignette/Vignette';

function Produit() {

  let {id} = useParams()
  console.log({id});
  const [data, setData] = useState(
    
  );


  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async () => {

    try {
      const response = await fetch(`http://localhost:5000/meubles/:${id}`);
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
 

  return (
      data.map((item) => (

        console.log(item)
      
    ))
    // <div>{id}</div>
  
  )
}


export default Produit;