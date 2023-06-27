// import dotenv from 'dotenv'
require('dotenv').config({path:'./.env'})
const express = require('express');
let cors = require('cors')
let app = express()

app.use(cors())

// dotenv.config()

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});
app.get('/test', (req,res) =>{
    res.send("ok")
})
app.listen(process.env.PORT, () => {
    console.log(`Server app listening on port ${process.env.PORT}`);
});