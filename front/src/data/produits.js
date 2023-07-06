const port = import.meta.env.VITE_PORT
// export const produits = [
//     {"id": 1, "nom": "Table basse", "prix": 30, "description": "bla bla bla", "hauteur": 100, "largeur": 100, "longueur": 100, "disponibilite": true, "categorie": "table"},
//     {"id": 2, "nom": "Chaise haute", "prix": 10, "description": "bla bla bla", "hauteur": 100, "largeur": 100, "longueur": 100, "disponibilite": true, "categorie": "chaise"},
//     {"id": 3, "nom": "Canapé 3 places", "prix": 300, "description": "bla bla bla", "hauteur": 100, "largeur": 100, "longueur": 100, "disponibilite": true, "categorie": "canapé"},
//     {"id": 4, "nom": "Grand table", "prix": 120, "description": "bla bla bla", "hauteur": 100, "largeur": 100, "longueur": 100, "disponibilite": true, "categorie": "table"},
//     {"id": 5, "nom": "Buffet", "prix": 400, "description": "bla bla bla", "hauteur": 100, "largeur": 100, "longueur": 100, "disponibilite": true, "categorie": "rangement"}
// ]

const produitsBDD = async ()=>{
  console.log("coucou page produits")
    const url = `http://localhost:${port}/meubles`
    const reponse = await fetch(url)
    const jsonData = await reponse.json()
    console.log(jsonData)
    return jsonData;
}

export default produitsBDD;

    