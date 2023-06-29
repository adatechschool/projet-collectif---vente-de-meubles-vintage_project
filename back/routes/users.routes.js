const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users.controllers')

// router.get('/',controllers.declarefirstmessage)
// router.post('/test/',controllers.createObject)
router.post('/',controllers.createObject) //jai changé la route pour que ce soit / et non /test
// Dans l'idée ou nous arrivons directement sur la page login coté front 
router.post('/login',controllers.checkUserExists)


module.exports = router 