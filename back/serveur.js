// import dotenv from 'dotenv'
require('dotenv').config({path:'./.env'})
const express = require('express')
let app = express()
let cors = require('cors')
const testroute = require('./routes/test.route.js')
const router = require('express').Router()
app.use(cors())
app.use("/test",ok)

function ok(req, res,next) {
    const objet= {
        clef : "Test réponse serveur"
    }
    // Logique du middleware
    res.status(200).json(objet)
  };
router.get('/test',ok)


app.listen(process.env.PORT, () => {
    console.log(`Server app listening on port ${process.env.PORT}`);
});