import React from 'react'

const Bouton = (props) => {
  return (
    <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>{props.texteBouton}</button>
  )
}

export default Bouton;