import React from 'react'
import Vignette from '../Vignette/Vignette'
import {produits} from '../../data/produits'

function Main() {
  return (
    <div className='flex flex-wrap'>
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