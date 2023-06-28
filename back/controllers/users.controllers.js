
const declarefirstmessage = ((req,res)=>{
  console.log('controllers')
    console.log('test 1er get')
    res.status(201).json({message: '1er get'})

  })

const createObject = ((req,res,next)=>{
  console.log('1er post')
  console.log(req.body)
  res.status(200).json({message: "objet créé"})
  next()
})

module.exports = {declarefirstmessage, createObject}
