require('dotenv').config()
const connectDB = require('./db/connect')
const express = require('express')
const tasks = require('./routes/tasks')


const app = express()

app.use(express.json())
app.use('/api/v1/tasks',tasks)

app.get('/hello', (request, responce) => {
    responce.status(200).send("Task Manager App")
})

const port = process.env.PORT
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listining on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()