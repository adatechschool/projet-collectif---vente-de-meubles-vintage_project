const connect  = require('../sql/connexion');

const displayObjectmeubles = ((req,res,next)=>{
    connect.query('SELECT id,titre,prix,description,photo FROM testmeubles', (error, results) => {
      if (error) {
        console.error("Erreur de récupération du meuble", error);
      } else {
        console.log(results)
        res.status(200).send(results);
        // Effectuer d'autres actions si nécessaire
      }
      });
})

module.exports = {displayObjectmeubles}