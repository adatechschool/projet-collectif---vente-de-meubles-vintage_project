const connect  = require('../sql/connexion');
const createObjectmeubles = ((req,res,next)=>{
    connect.query('SELECT id,titre,prix,photo,description FROM testmeubles', (error, results) => {
      if (error) {
        console.error("Erreur lors de l'insertion de l'utilisateur", error);
      } else {
        console.log(results)
        res.status(200).send(results);
        // Effectuer d'autres actions si nécessaire
      }
      });
})

module.exports = {createObjectmeubles}