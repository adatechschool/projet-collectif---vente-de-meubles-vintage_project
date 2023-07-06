const express = require('express')
const router = express.Router()
const controllers = require('../controllers/produit.controllers')
const multer = require('multer');

// Définir le dossier de destination pour les fichiers téléchargés
const upload = multer({ dest: '../back/Assets/img_meubles/' });

router.get('/meubles/:id',controllers.createObjectDetailProduct)
router.post('/meubles/create',controllers.createNewProduct)
router.post('/upload', upload.single('photo'), controllers.uploadPhoto);

module.exports = router 