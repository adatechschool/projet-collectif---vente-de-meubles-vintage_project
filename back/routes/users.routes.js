const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users.controllers')
// const meubles = require('../controllers/accueil.controllers')


router.post('/test',controllers.createObject) 
// router.get('/meubles',meubles.createObjectmeubles)
//jai changé la route pour que ce soit / et non /test
// Dans l'idée ou nous arrivons directement sur la page login coté front 
module.exports = router 