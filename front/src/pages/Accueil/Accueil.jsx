import React from 'react'
import Navbar from '../../composants/Navbar/Navbar';
import Header from '../../composants/Header/Header';
import Main from '../../composants/Main/Main';
import Footer from '../../composants/Footer/Footer';

function Accueil() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='bg-beige p-4 '>
        <h2 className='text-3xl text-dark-brown'>LA COLLECTION</h2>
      </div>
      <Main/>
      <Footer/>
    </div>
  )
}
export default Accueil;