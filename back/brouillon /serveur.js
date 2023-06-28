// import dotenv from 'dotenv'
require('dotenv').config({path:'./.env'})
const express = require('express')
let app = express()
let cors = require('cors')
// const testroute = require('./routes/testroute.js')
const connexion = require('../sql/connexion.js')
app.use(cors())

app.use("/test", express.static("./"));
app.use(express.json())
// app.use("/test",testroute)
app.get('/connexion', (req, res) => {
    connexion.query('SELECT * FROM test', (error, results) => {
      if (error) {
        console.error('Erreur lors de l\'exécution de la requête :', error);
        res.status(500).send('Erreur du serveur');
      } else {
        res.json(results);
      }
    });
  });

app.listen(process.env.PORT, () => {
    console.log(`Server app listening on port ${process.env.PORT}`);
});
module.exports = app