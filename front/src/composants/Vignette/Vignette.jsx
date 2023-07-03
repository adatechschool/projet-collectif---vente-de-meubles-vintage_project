
import React from 'react'
// import Bouton from '../Bouton/Bouton'
// import noImage from '../../assets/img_vignette/img_non_dispo.jpg'
import { useNavigate } from 'react-router-dom'

function Vignette({id, nom, prix, photo}) {

  // Utilisation du Hook UseNavigate pour accéder à un URL spécifique aux pages avant ou arrière
  let navigate = useNavigate()

  return (
    <div>
    <div key={id} className='Global h-80 w-72 p-2 m-2 bg-orange-500'>
        <div className='image h-4/6'>
            <img src={photo} className='h-full w-full object-cover'/>
        </div>
        <div className='contenu bg-red-100 flex h-2/6'>
            <div className='produit bg-red-500 w-2/3 text-left p-2'>
                <h1>{nom}</h1>
                <p>{prix} €</p>
            </div>
            <div className='acheter bg-red-200 w-1/3 p-2'>
          {/* ici Navigate va agir comme router.push our aller à l'URL spécifique*/}
            <button onClick ={() => {navigate(`/produit/${id}`)}}>Réserver</button>
            {/* //remettre le bouton et réaliser le onclick sur l'image */}
            {/* <Bouton texteBouton="Acheter" /> */}

            </div>

        </div>
      </div>
    </div>
  );
}

export default Vignette;
