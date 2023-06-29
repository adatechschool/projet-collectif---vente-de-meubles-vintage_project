import React, { useState, useEffect } from 'react'
import Vignette from '../Vignette/Vignette'
// import {produits} from '../../data/produits'


function Main() {

  const [meuble, setMeuble] = useState()

  useEffect ( ()=>{
    getMeubles()

  }, [])

  const getMeubles = async () => {
    try {
      const response = await fetch('http://localhost:8000/meubles');
      const jsonMeuble = await response.json();
      setMeuble(jsonMeuble);
    } catch(error) {
      console.log('Error', error);
    }
  }

  return (
    <div id="main" className='flex flex-wrap min-h-screen'>
      <div>bonjour</div>

  {
        meuble.map(item => (
          <Vignette
            key={item.id}
            nom={item.nom}
            prix={item.prix} 
          />
        ))
      }


      {/* {
        produits.map(({ id, nom, prix }) => (
          <Vignette
            key={id}
            nom={nom}
            prix={prix} 
          />
        ))
      } */}
    </div>
  )
}

export default Main