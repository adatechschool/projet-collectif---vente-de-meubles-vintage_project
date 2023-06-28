const mysql = require('mysql');
console.log('connection');
const connect  = require('../sql/connexion');

const declarefirstmessage = ((req,res)=>{
  console.log('controllers')
    console.log('test 1er get')
    res.status(201).json({message: '1er get'})

  })

const createObject = ((req,res,next)=>{
    //  console.log(req.body);
    //  console.log(req.body.name);
    //  const {name, firstname, email} = req.body
    //  console.log(name)

    // récupération destructurée des données du formulaire
     const nom = req.body.name
     const prenom = req.body.firstname
     const email = req.body.email
     const values = [
      nom,
      prenom,
      email
     ]

    
     const query = "INSERT INTO Test_users (nom, prenom, email) VALUES (?,?,?)"
     connect.query(query, values)
      // if (error) throw error;
      // else (console.log("Nouvelle phrase insérée avec succès !"))
    // Fermer la connexion à la base de données après l'exécution de la requête
     connect.end();

  // res.status(200).json({message: "objet créé"})


  next()
})

module.exports = {declarefirstmessage, createObject}
