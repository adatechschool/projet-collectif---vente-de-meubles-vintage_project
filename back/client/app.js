function test(){

  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const email = document.getElementById("email").value;

  const data = {
    name : nom,
    firstname : prenom,
    email : email
  }
    const url = "http://localhost:3000/login" // j'ai changé le /test en /
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json()) // Traitement de la réponse comme JSON
        .then(data => {
          console.log("data",data)
          alert(data.message)
          if (data.message== "Utilisateur ok LOGIN") {
            const redirectionUrl = "/inscription?nom=" + encodeURIComponent(nom) + "&prenom=" + encodeURIComponent(prenom) + "&email=" + encodeURIComponent(email);
            window.location.href = redirectionUrl;

          }
          
          // window.location.href = "/inscription"; //Nous redirigons vers des route exemple : "/inscription et non vers des fichier html"
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
        });
}




