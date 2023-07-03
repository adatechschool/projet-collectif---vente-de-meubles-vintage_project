const express=require('express')
const app = express()
const router = require('./routes/users.routes.js')
const accueil = require('./routes/accueil.routes.js')
const produit = require('./routes/produit.routes.js')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use("/", express.static("../front/dist/"))
// app.use("/", express.static("../front/dist/"))
app.use("/inscription", express.static("./client/inscription.html")); 

app.use(express.json())

app.use('/',router)
app.use('/',accueil)
app.use('/',produit)





module.exports = app