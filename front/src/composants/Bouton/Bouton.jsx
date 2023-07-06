import React from 'react'
import { Link } from 'react-router-dom';

const Bouton = ({onClick, texteBouton, classbouton}) => {
  return (
    <div className={classbouton}>

      <button onClick={ onClick } >{texteBouton}</button>

    </div>
    
  )
}

export default Bouton;

