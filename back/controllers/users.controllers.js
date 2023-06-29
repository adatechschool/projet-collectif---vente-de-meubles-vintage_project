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

const checkUserExists =((req,res, next) =>{
  const email = req.body.email
  console.log(email)
  const exists = "EXISTS(SELECT 1 FROM test_users WHERE email = '" + email + "')"
  const query = "SELECT " + exists;
  connect.query(query, (error, result)=> {
    console.log("result",result)
    // console.log("connectquery ?", result[0][exists])
    if (error) {
      console.error("Erreur ", error);
    }
    else if(result[0][exists]===1){
      console.log("utilisateur trouvé : ", result)
      res.status(200).send({message: "Utilisateur ok LOGIN"})
    }
    else if(result[0][exists]===0){
      console.log("user not found")
      res.status(200).send({message: "NON LOGIN"})
    }
    connect.end();
  })
})



const checkedUser = (req, res, next) => {
  let email = req.body.email;
  if (email) {
    connect.query('SELECT * FROM test_users WHERE email = ?', [email], function(error, results) {
      // If there is an issue with the query, output the error
      if (error) throw error;
      // If the account exists
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.email = email;
        res.redirect('/accueil');
      }
      next()
    });
  }
  connect.end()
};

module.exports = {createObject, checkUserExists, checkedUser}
