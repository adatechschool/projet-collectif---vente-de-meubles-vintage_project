
function test(){
    const url = "http://localhost:8080/test"
    fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
        }
      })
        .then(response => response.json()) // Traitement de la réponse comme JSON
        .then(data => {
          console.log(data.clef);
          const test = document.createElement('p')

          test.innerText = data.clef
          document.getElementById('jess').appendChild(test)
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
        });
}


