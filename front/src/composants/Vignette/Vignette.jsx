import React from 'react'
import Bouton from '../bouton/Bouton'
import noImage from '../../assets/img_vignette/img_non_dispo.jpg'

function Vignette() {
  return (
    <div className='Global h-80 w-72 p-2 bg-orange-500'>
        <div className='image h-4/6'>
            <img src={noImage} className='h-full w-full object-cover'/>
        </div>
        <div className='contenu bg-red-100 flex h-2/6'>
            <div className='produit bg-red-500 w-2/3 text-left p-2'>
                <h1>Titre produit</h1>
                <p>Prix €</p>
            </div>
            <div className='acheter bg-red-200 w-1/3 p-2'>
                <Bouton texteBouton="Acheter"/>
            </div>
        </div>
    </div>
  )
}

export default Vignette
