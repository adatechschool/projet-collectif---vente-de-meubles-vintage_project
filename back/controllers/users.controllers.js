const mysql = require('mysql');
const connect  = require('../sql/connexion');

// importez la fonction hashPassword
const { hashPassword } = require('./passwordEncryption');

// fonction est utilisée pour créer un nouvel objet dans la base de données
const createObject = ((req,res,next)=>{
     const nom = req.body.name
     const prenom = req.body.firstname
     const email = req.body.email
     const mdp = req.body.password

     // Hacher le mot de passe
     hashPassword(mdp)
      .then((hashedPassword) => {
        const values = [nom, prenom, email, hashedPassword]
        const query = "INSERT INTO test_users (nom, prenom, email, mdp) VALUES (?,?,?,?)"

        // Exécuter la requête SQL
        connect.query(query, values, (error, results) => {
        if (error) {
          console.error("Erreur lors de l'insertion de l'utilisateur", error);
          // Gérer l'erreur lors de l'insertion dans la base de données
        } else {
          console.log("Utilisateur inséré avec succès");
          res.status(200).send({message: "Utilisateur inséré avec succès"});
          // Effectuer d'autres actions si nécessaire
        }
  
      // Fermer la connexion à la base de données
      // connect.end();
      });
})
.catch((error) => {
  console.log(error.message);
});
});

const checkUserExists =((req,res, next) =>{
  const email = req.body.email
  console.log(email)
  // const exists = "EXISTS(SELECT 1 FROM test_users WHERE email = '" + email + "')"
  // const query = "SELECT " + exists;

  const query2 = "SELECT EXISTS(SELECT 1 FROM test_users WHERE email = '" + email + "') as emailCheck "
  connect.query(query2, (error, result)=> {
    console.log("result",result)
    // console.log("connectquery ?", result[0][exists])
    if (error) {
      console.error("Erreur ", error);
    }
    else if(result[0]['emailCheck']===1){
      console.log("utilisateur trouvé : ", result)
      res.status(200).send({message: "Utilisateur ok LOGIN"})
    }
    else if(result[0]['emailCheck']===0){
      console.log("user not found")
      res.status(200).send({message: "NON LOGIN"})
    }
    // connect.end();
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
  // connect.end() 
};

const checkLogin = ((req, res, next) => {
  // let email = req.body.email;
	// let password = req.body.password;

	let email = "j@gmail.com";
	let password = "test";

	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified email and password
		connect.query('SELECT * FROM test_users WHERE email = ? AND mdp = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user

				// req.session.loggedin = true;
				// req.session.email = email;

				// Redirect to home page

				// res.redirect('/home');
        res.status(200).send({message:`Log in OK : ${email}, ${password}`});
			} else {
        res.status(401).send({message:`Incorrect email and/or Password!`})
				// res.send('Incorrect email and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter email and Password!');
		res.end();
	}
})

module.exports = {createObject, checkUserExists, checkedUser, checkLogin}
