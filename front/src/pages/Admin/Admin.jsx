import React from 'react'
import Navbar from '../../composants/Navbar/Navbar';
import Table from '../../composants/Table/Table';
import { produits } from '../../data/produits';

function Admin() {
  return (
    <div>
      <Navbar/>
      <Table data={produits}/>
    </div>
  )
}

export default Admin;