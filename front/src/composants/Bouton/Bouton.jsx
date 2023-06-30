import React from 'react'

const Bouton = ({onClick, texteBouton}) => {
  return (
    <button onClick={ onClick } >{texteBouton}</button>
  )
}

export default Bouton;