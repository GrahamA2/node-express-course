const Task = require('../models/task')

const createTask = async ( req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (err) {
        res.status(500).send({msg: err})
    }
}

const getTask = async ( req, res) => {
    res.status(200).send('Get single task')
}

const updateTask = ( req, res) => {
    res.status(202).send('Update Task')
}

const deleteTask = ( req, res) => {
    res.status(202).send('Delete Task')
}

const getAllTasks = async ( req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).send({msg: err})
    }
}

module.exports = {createTask,getTask,updateTask,deleteTask,getAllTasks}