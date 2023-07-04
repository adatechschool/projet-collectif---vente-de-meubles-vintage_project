const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users.controllers')

// Route pour créer un utilisateur
router.post('/signup',controllers.createObject)
// Dans l'idée ou nous arrivons directement sur la page login coté front 
router.post('/login',controllers.checkUserExists)


module.exports = router 