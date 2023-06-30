import React from 'react'
import Vignette from '../Vignette/Vignette'
import {produits} from '../../data/produits'

function Main() {
  return (
    <div id="main" className='flex flex-wrap min-h-screen content-around justify-around'>
      {
        produits.map(({ id, nom, prix }) => (
          <Vignette
            key={id}
            nom={nom}
            prix={prix} 
          />
        ))
      }
    </div>
  )
}

export default Main