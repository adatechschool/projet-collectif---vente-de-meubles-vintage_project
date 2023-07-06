const express = require('express')
const router = express.Router()
const controllers = require('../controllers/produit.controllers')

router.get('/meubles/:id',controllers.createObjectDetailProduct)
router.post('/meubles/create',controllers.createNewProduct)

module.exports = router 