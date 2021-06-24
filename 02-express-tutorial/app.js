const express = require('express')
const logger = require('./logger')
const morgan = require('morgan')

const app = express()

//Middleware
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Routing
app.use(express.static('./methods-public'))
const people = require('./routes/people')
app.use('/api/people',people)
const login = require('./routes/login')
app.use('/',login)

//Start the server
app.listen(5000, () => {
    console.log('Sever on port 5000...')
})

