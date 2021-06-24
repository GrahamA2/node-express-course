const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    console.log(req.body)
    const {name, id} = req.body
    if ( name ){
      return res.status(200).send(`Welcome ${name} ${id}`)
    } 
    res.status(400).send('Please provide loging details!')

  })

module.exports = router