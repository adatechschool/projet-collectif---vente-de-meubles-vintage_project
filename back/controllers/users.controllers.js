const mysql = require('mysql');
const connect  = require('../sql/connexion');

const createObject = ((req,res,next)=>{
     const nom = req.body.name
     const prenom = req.body.firstname
     const email = req.body.email
     const values = [
      nom,
      prenom,
      email
     ]

    
     const query = "INSERT INTO test_users (nom, prenom, email) VALUES (?,?,?)"
     connect.query(query, values, (error, results) => {
      if (error) {
        console.error("Erreur lors de l'insertion de l'utilisateur", error);
      } else {
        console.log("Utilisateur inséré avec succès");
        res.status(200).send({message: "Utilisateur inséré avec succès"});
        // Effectuer d'autres actions si nécessaire
      }
  
      // Fermer la connexion à la base de données
      connect.end();
    });
})

module.exports = {createObject}
