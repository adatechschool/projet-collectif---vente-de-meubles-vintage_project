import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../../composants/Navbar/Navbar';
import Table from '../../composants/Table/Table';
import Footer from '../../composants/Footer/Footer'





function Admin() {
  
  return (
    <div>
      <Navbar/>

      <Table />


      <Footer/>
    </div>
  )
}

export default Admin;