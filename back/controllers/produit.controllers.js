const connect  = require('../sql/connexion');

const createObjectDetailProduct = ((req,res,next)=>{
  //  Selectionner le meuble avec le même ID de la selection du meuble
    const id = req.params.id
    const query = "SELECT DISTINCT * FROM testmeubles WHERE id ="+id
    connect.query(query,{id} ,(error, results) => {
      console.log('controlleur ?')
      if (error) {
        console.error("Erreur lors de l'insertion de l'utilisateur", error);
      } else {
        console.log(results)
        res.status(200).send(results);
        // Effectuer d'autres actions si nécessaire
      }
      });
})

module.exports = {createObjectDetailProduct}