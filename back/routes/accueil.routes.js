const express = require('express')
const router = express.Router()
const controllers = require('../controllers/accueil.controllers')

router.get('/meubles',controllers.displayObjectmeubles)

module.exports = router 