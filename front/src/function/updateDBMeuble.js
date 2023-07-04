const port = import.meta.env.VITE_PORT
function updateMeubleInfo(){
    
    const titre = document.getElementById("titre").value;
    const prix = document.getElementById("prix").value;
    const description = document.getElementById("description").value;
    const titrePlaceholder = document.getElementById("titre").placeholder;
    const prixPlaceholder = document.getElementById("prix").placeholder;
    const descriptionPlaceholder = document.getElementById("description").placeholder;
    
    const data = {
      titre : titre ? titre:titrePlaceholder,
      prix : prix ? prix:prixPlaceholder,
      description : description ? description:descriptionPlaceholder
    }
    console.log("data update meuble",data)
    
      const url = `http://localhost:${port}/admin/:id`

      fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json()) // Traitement de la réponse comme JSON
          .then(data => {
            alert('meuble mis à jour')
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
}
export default updateMeubleInfo