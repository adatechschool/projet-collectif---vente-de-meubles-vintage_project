const express=require('express')
const app = express()
const router = require('./routes/users.routes.js')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use("/", express.static("./client/"))
app.use("/inscription", express.static("./client/inscription.html")); 
// Comment expliquer :( Alors au moment de la Réussite de ma requete coté serveur j'envoie dans .then coté client
// une alert qui me dit que j'ai bien entré un utilisateur dans ma base de donné par la suite je redirige
// vers un /inscription coté client Exemple : window.location.href = "/inscription";
// Ce slash coté client se charger avec la ligne 13 du coup quand j'arrive sur / inscription 
// Je vais charger mon fichier HTML qui est dans "./client/inscription.html"
// Est ce que j'ai étais clair ou c'est la merde ?

app.use(express.json())

app.use('/',router)




module.exports = app