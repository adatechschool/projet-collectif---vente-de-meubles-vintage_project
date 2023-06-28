console.log("test")

function test(){

  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const email = document.getElementById("email").value;

  console.log(nom)
  console.log(prenom)
  console.log(email)
  const data = {
    name : nom
  }


    const url = "http://localhost:3000/test"
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json()) // Traitement de la réponse comme JSON
        .then(data => {
          console.log(data)


        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
        });
}


