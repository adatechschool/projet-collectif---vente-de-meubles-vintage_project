const mysql = require('mysql');
// const { connect } = require('../serveur');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vente_meubles',
    port: 8889
  });
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err);
    } else {
      console.log('Connecté à la base de données MySQL');
    }
  });
  module.exports = connection