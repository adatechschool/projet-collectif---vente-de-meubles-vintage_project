import React from 'react';
import Navbar from '../../composants/Navbar/Navbar';
import Slider from '../../composants/Slider/Slider';
import { produits } from '../../data/produits';
import Detail from '../../composants/Detail/Detail';

function Produit() {
  // Select the product based on the desired ID
  const selectedProduit = produits.find((produit) => produit.id === 3);

  return (
    <div>
      <Navbar />
      <p className=''>Retour à la recherche</p>
      <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-wrap bg-purple-200 flex w-full h-[600px]'>
        {/* Zone Carousel Photos */}
        <div className='flex justify-center h-auto'>
          <Slider />
        </div>

        {/* Zone Texte Détails Meubles */}
        <div className='bg-blue-300 w-full flex justify-center items-center'>
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
    </div>
  );
}

export default Produit;