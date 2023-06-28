const express=require('express')
const app = express()
const router = require('./routes/users.routes.js')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use("/", express.static("./client/"))

app.use(express.json())

app.use('/',router)
app.post('/test',(req,res,next)=>{
  console.log('test 1er get')
 

  next()
})
// app.get('/',(req,res,next)=>{
//   console.log('test 1er get')
//   res.status(201).json({message: '1er get'})

//   next()
// })





app.get('/test/stuff',(req,res,next)=>{
  console.log('reponse')
  res.status(201)
  next()
})


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



module.exports = app