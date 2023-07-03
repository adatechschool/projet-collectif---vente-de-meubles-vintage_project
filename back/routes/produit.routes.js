const express = require('express')
const router = express.Router()
const controllers = require('../controllers/produit.controllers')

router.get('/meubles/byId/:id',controllers.createObjectDetailProduct)

module.exports = router 