
const declarefirstmessage = ((req,res)=>{
  console.log('controllers')
    console.log('test 1er get')
    res.status(201).json({message: '1er get'})

  })
module.exports = {declarefirstmessage}