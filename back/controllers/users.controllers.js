const mysql = require('mysql');
const connect = require('../sql/connexion');
const bcrypt = require('bcrypt');

// Importer la fonction hashPassword
const { hashPassword } = require('./passwordEncryption');

// fonction est utilisée pour créer un nouvel objet dans la base de données
// Fonction asynchrone pour créer un nouvel objet utilisateur dans la base de données
const createObject = async (req, res, next) => {
    // Extraction des valeurs
  const { name, firstname, email, password } = req.body;

try {
  // Hacher le mot de passe
  const hashedPassword = await hashPassword(password); // Hachage du mot de passe

  const values = [name, firstname, email, hashedPassword]; // Création d'un tableau de valeurs à insérer dans la requête SQL
  const query = "INSERT INTO test_users (nom, prenom, email, mdp) VALUES (?,?,?,?)"; // Requête SQL d'insertion d'un nouvel utilisateur

  // Exécuter la requête SQL
  connect.query(query, values, (error, results) => { // Appel de la méthode query pour exécuter la requête SQL
    if (error) {
      console.error("Erreur lors de l'insertion de l'utilisateur", error); 
      res.status(500).json({ error: "Erreur lors de l'insertion de l'utilisateur" }); 
    } else {
      console.log("Utilisateur inséré avec succès"); 
      res.status(200).json({ message: "Utilisateur inséré avec succès" }); 
    }
  });
} catch (error) {
  console.log(error.message); 
  res.status(500).json({ error: error.message }); 
}
}

// Fonction pour vérifier si un utilisateur existe
const checkUserExists = (req, res, next) => {
  const { email } = req.body;

  // Requête SQL pour compter le nombre d'utilisateurs ayant l'email spécifié
  const query = "SELECT COUNT(*) AS count FROM test_users WHERE email = ?";

  // Exécution de la requête SQL 
  connect.query(query, [email], (error, result) => {
    if (error) {
      console.error("Erreur lors de la vérification de l'existence de l'utilisateur", error);
      res.status(500).json({ error: "Erreur lors de la vérification de l'existence de l'utilisateur" });
    } else {
      const emailCheck = result[0].emailCheck;
      if (emailCheck === 1) {
        console.log("Utilisateur trouvé");
        res.status(200).json({ message: "Utilisateur trouvé" });
      } else if (emailCheck === 0) {
        console.log("Utilisateur non trouvé");
        res.status(404).json({ message: "Utilisateur non trouvé" });
      } else {
        console.error("Résultat de la vérification de l'existence de l'utilisateur non valide");
        res.status(500).json({ error: "Erreur lors de la vérification de l'existence de l'utilisateur" });
      }
    }
  });
};

// Fonction pour vérifier l'utilisateur
const checkedUser = (req, res, next) => {
  const { email } = req.body;

  if (email) {
    connect.query('SELECT * FROM test_users WHERE email = ?', [email], function (error, results) {
      if (error) {
        console.error("Erreur lors de la vérification de l'utilisateur", error);
        res.status(500).json({ error: "Erreur lors de la vérification de l'utilisateur" });
      } else {
        if (results.length > 0) {
        // Si des résultats sont retournés, signifie qu'un utilisateur existe
          req.session.loggedin = true;
          req.session.email = email;
          res.redirect('/accueil');// Rediriger l'utilisateur vers la page "/accueil"
        } else {
          next();
        }
      }
    });
  }
};


const checkLogin = (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
		connect.query('SELECT mdp FROM test_users WHERE email = ? ', [email], function(error, results) {
      
      if (error) {
        console.error("Erreur lors de la vérification de la connexion", error);
        res.status(500).json({ error: "Erreur lors de la vérification de la connexion" });
      } else {
        if (results.length > 0) {
          const hashedPassword = results[0].mdp;
          bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) {
              console.error("Erreur lors de la comparaison des mots de passe", err);
              res.status(500).json({ error: "Erreur lors de la comparaison des mots de passe" });
            } else {
              if (result) {
                console.log("Succès : Connexion réussie");
                res.status(200).json({ message: `Connexion OK : ${email}` });
              } else {
                console.log("Échec : Mot de passe incorrect");
                res.status(401).json({ message: "Échec de la connexion : Mot de passe incorrect" });
              }
            }
          });
        } else {
          console.log("Échec : Utilisateur non trouvé");
          res.status(404).json({ message: "Échec de la connexion : Utilisateur non trouvé" });
        }
      }
    });
  } else {
    console.log("Échec : Email et/ou mot de passe non fourni(s)");
    res.status(400).json({ message: "Échec de la connexion : Email et/ou mot de passe non fourni(s)" });
  }
};

module.exports = {
  createObject,
  checkUserExists,
  checkedUser,
  checkLogin
};