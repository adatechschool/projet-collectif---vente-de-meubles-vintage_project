const express = require('express')
const router = express.Router()
const controllers = require('../controllers/produit.controllers')

router.get('/meubles/:id',controllers.createObjectDetailProduct)

module.exports = router 