// import dotenv from "dotenv";
require('dotenv').config();

const mysql = require('mysql');
// const { connect } = require('../serveur');
const port_BDD = process.env.PORT_BDD;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vente_meubles',
    port : port_BDD
  });
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err);
    } else {
      console.log('Connecté à la base de données MySQL');
    }
  });
  module.exports = connection