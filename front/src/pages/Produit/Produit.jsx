import React from 'react';
import Navbar from '../../composants/Navbar/Navbar';
import Slider from '../../composants/Slider/Slider';
import { produits } from '../../data/produits';
import Detail from '../../composants/Detail/Detail';
import { Link } from 'react-router-dom';

function Produit() {
  // Select the product based on the desired ID
  const selectedProduit = produits.find((produit) => produit.id === 3);

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
          <Slider />
        </div>

        {/* Zone Texte Détails Meubles */}
        <div className='flex justify-center items-center'>
          {/* requête : from table meuble where id = id de la viguette sélectionné  */}
          <Detail
            id={selectedProduit.id}
            nom={selectedProduit.nom}
            prix={selectedProduit.prix}
            description={selectedProduit.description}
            hauteur={selectedProduit.hauteur}
            largeur={selectedProduit.largeur}
            longueur={selectedProduit.longueur}
            disponibilite={selectedProduit.disponibilite}
            categorie={selectedProduit.categorie}
          />
        </div>
      </div>
    </div>
  );
}

export default Produit;
