// Extraction des paramètres de requête de l'URL
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");
const prenom = params.get("prenom");
const email = params.get("email");

// Mise à jour du contenu de la page avec les valeurs récupérées
document.getElementById("nom").innerText = nom;
document.getElementById("prenom").innerText = prenom;
document.getElementById("email").innerText = email;
// Modification de l'url pour qu'il n'y ai plus le champ nom prénom email dans l'url 
// Ceci est exécuter de la ligne de 14 a 17
// Pour bien comprendre commenté ligne 15 a 18 on vera que l'url est égale a 
// http://localhost:3000/inscription?nom=s&prenom=s&email=s
// De plus je n'ai pas tous compris encore
const url = new URL(window.location.href);
url.search = "";
const newUrl = url.pathname;
window.history.pushState(null, "", newUrl);