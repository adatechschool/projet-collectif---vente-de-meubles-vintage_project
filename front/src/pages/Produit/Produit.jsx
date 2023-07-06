
// import React from 'react';
import Navbar from '../../composants/Navbar/Navbar';
import Slider from '../../composants/Slider/Slider';
// import produitsBDD  from '../../data/produits';
import Detail from '../../composants/Detail/Detail';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createContext, useContext } from 'react';

const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;



function Produit() {
  // const location = useLocation();
  // const id = location.pathname.split("/")[2]; 
  let { id } = useParams()
  const [produitDetail, setproduitDetail] = useState({});


  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async () => {

    try {
      const response = await fetch(`http://localhost:${port}/meubles/${id}`);
      const jsonData = await response.json();
      // console.log(jsonData)
      setproduitDetail(jsonData[0]);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='h-16 flex justify-start items-center'>
        <Link to="/accueil" className='text-dark-brown'>
        <p className='ml-[10%] w-full'>Retour à la recherche</p>
        </Link>
      </div>
      
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 h-[600px]'>
        {/* Zone Carousel Photos */}
        <div className='flex justify-center items-center h-auto'>
          <img src={host+":"+port+"/images/"+produitDetail.photo}></img>
        </div>

        {/* Zone Texte Détails Meubles */}
        <div className='flex justify-center items-center'>
          {/* requête : from table meuble where id = id de la viguette sélectionné  */}
          <Detail
            id={id}
            nom={produitDetail.titre ?? "..."}
            prix={produitDetail.prix ?? "..."}
            description={produitDetail.description ?? "..."}
            photo={produitDetail.photo}
            hauteur={produitDetail.hauteur}
            largeur={produitDetail.largeur}
            longueur={produitDetail.longueur}
            disponibilite={produitDetail.disponibilite}
            categorie={produitDetail.categorie}
          />
        </div>
      </div>
    </div>
  );
}

export default Produit;
