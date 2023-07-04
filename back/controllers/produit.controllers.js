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

const createNewProduct = ((req,res,next)=>{
  const titre = req.body.titre
  const prix = req.body.prix
  const description = req.body.description
  const photo = req.body.photo

  const values = [
    titre,
    prix,
    description,
    photo
  ]

  const query = "INSERT INTO testmeubles ( titre, prix, description, photo) VALUES (?,?,?,?)"
  connect.query(query, values, (error, results) => {
    if(error){
      console.error("Erreur lors de la création d'un nouveau produit",error)
    }else{
      console.log("Produit créer avec succès")
      res.status(200).send({message: "Produit créer avec succès"})
    }
  })
})

module.exports = {createObjectDetailProduct, createNewProduct}