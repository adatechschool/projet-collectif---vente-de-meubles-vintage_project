import React from 'react'
import Navbar from '../../composants/Navbar/Navbar';
import Table from '../../composants/Table/Table';
import Footer from '../../composants/Footer/Footer'
import { produits } from '../../data/produits';

function Admin() {
  return (
    <div>
      <Navbar/>
      <Table data={produits}/>
      <Footer/>
    </div>
  )
}

export default Admin;