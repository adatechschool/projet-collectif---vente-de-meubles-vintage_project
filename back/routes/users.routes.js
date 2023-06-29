const express = require('express')
const router = express.Router()
const controllersthomas = require('../controllers/users.controllers')

// router.get('/',controllersthomas.declarefirstmessage)
// router.post('/test/',controllersthomas.createObject)
// router.post('/',controllersthomas.createObject) //jai changé la route pour que ce soit / et non /test
router.post('/',controllersthomas.createObject) //jai changé la route pour que ce soit / et non /test
// Dans l'idée ou nous arrivons directement sur la page login coté front 
module.exports = router 