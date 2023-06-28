const express=require('express')
const app = express()
const router = require('./routethomas/routes.js')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(express.json())
app.use('/',router)
// app.get('/',(req,res,next)=>{
//   console.log('test 1er get')
//   res.status(201).json({message: '1er get'})

//   next()
// })


// app.post('/test/',(req,res,next)=>{
//   console.log('1er post')
//   console.log(req.body)
//   res.status(200).json({message: "objet créé"})

//   next()
// })


// app.get('/test/stuff',(req,res,next)=>{
//   console.log('reponse')
//   res.status(201)
//   next()
// })


// app.get('/test/stuff', (req, res, next) => {
//   console.log('test log')
//   const stuff = [
//     {
//       _id: '1234',
//       description: 'une belle table',
//       meuble: 'tabe',
//       price: 4900,
//       userId: 'Jess',
//     },
//     {
//       _id: '5678',
//       description: 'une jolie chaise',
//       meuble: 'chaise',
//       price: 4900,
//       userId: 'Lucie',
//     }
//   ];
//   res.json(stuff);



// });
// function test(){
//     const url = "http://localhost:8080/test"
//     fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json', 
//         }
//       })
//         .then(response => response.json()) // Traitement de la réponse comme JSON
//         .then(data => {
//           console.log(data.clef);
//           const test = document.createElement('p')

//           test.innerText = data.clef
//           document.getElementById('jess').appendChild(test)
//         })
//         .catch(error => {
//           // Gestion des erreurs
//           console.error(error);
//         });
// }


module.exports = app