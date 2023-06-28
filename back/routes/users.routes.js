const express = require('express')
const router = express.Router()
const controllersthomas = require('../controllers/users.controllers')

router.get('/',controllersthomas.declarefirstmessage)
router.post('/test/',controllersthomas.createObject)
module.exports = router