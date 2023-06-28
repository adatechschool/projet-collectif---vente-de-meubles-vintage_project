const express = require('express')
const router = express.Router()

const {
    testcontroller,
}
= require('../controllers/testcontrollers')
console.log('route')


router.get('/test',testcontroller)

module.exports = router









