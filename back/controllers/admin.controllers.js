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


const updateObject = (req, res, next) => {
  const id = req.params.id;
  const { titre, prix, description, photo } = req.body;

  const query = "UPDATE testmeubles SET titre = ?, prix = ?, description = ?, photo = ? WHERE id = ?";
  const values = [titre, prix, description, photo, id];

  connect.query(query, values, (error, results) => {
    if (error) {
      console.error("Erreur lors de la modification du meuble", error);
      res.status(500).send({ message: "Erreur lors de la modification du meuble" });
    } else {
      console.log("Modification du meuble réalisée avec succès");
      res.status(200).send({ message: "Modification du meuble réalisée avec succès" });
      // Perform other necessary actions if needed
    }
  });
};
module.exports = {deleteObject, updateObject}