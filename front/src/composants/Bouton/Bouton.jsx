import React from 'react'
import { Link } from 'react-router-dom';

const Bouton = ({onClick, texteBouton}) => {
  return (
    <div>

      <button onClick={ onClick } >{texteBouton}</button>

    </div>
    
  )
}

export default Bouton;

