const connect  = require('../sql/connexion');

const createObjectDetailProduct = ((req,res,next)=>{
    const id = req.params.id
    const query = "SELECT titre FROM testmeubles WHERE testmeubles_id = '${id}'"
    console.log('Ola');
    //  Selectionner le meuble avec le même ID de la selection du meuble
    connect.query(query, (error, results) => {
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