import React from 'react'
import Navbar from '../../composants/Navbar/Navbar';
// import Carousel from '../../composants/Carousel/Slider';
import Slider from '../../composants/Carousel/Slider';

function Produit() {
  return (
    <div>
      <Navbar/>
      {/* <Carousel/> */}
      <Slider/>
      <p className=''>Retour à la recherche</p>
    </div>
  )
}

export default Produit;