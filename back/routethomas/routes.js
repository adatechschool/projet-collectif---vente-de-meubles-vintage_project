const express = require('express')
const router = express.Router()
const controllersthomas = require('../controllersthomas/controllers')

router.get('/',controllersthomas.declarefirstmessage)
module.exports = router