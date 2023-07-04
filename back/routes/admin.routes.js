const express = require('express');
const router = express.Router();
const controllers = require('../controllers/admin.controllers');

router.delete('/admin/:id', controllers.deleteObject);

router.put('/admin/:id', controllers.updateObject);

module.exports = router;
