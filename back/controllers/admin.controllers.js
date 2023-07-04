const mysql = require('mysql');
const connect  = require('../sql/connexion');

const deleteObject = ((req,res,next)=>{

const id = req.params.id;
const query = "DELETE FROM testmeubles WHERE ID ="+id

connect.query(query, {id}, (error, results) => {
    if (error) {
      console.error("Erreur lors de la supression du meuble", error);
    } else {
      console.log("Suppression du meuble avec succès");
      res.status(200).send({message: "Suppression du meuble avec succès"});
      // Effectuer d'autres actions si nécessaire
    }
    })

})

module.exports = {deleteObject}