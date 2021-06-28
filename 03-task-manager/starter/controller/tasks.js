const Task = require('../models/task')
const asyncWrapper = require('../middleware/asyncWrapper')
const { createCustomError } = require('../errors/custom-error')

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findById(taskID)
    if (!task) {
        console.log('AAAAAAA')
        return next(createCustomError(`no task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const taskDetails = req.body
    const task = await Task.findByIdAndUpdate(taskID, taskDetails, { new: true, runValidators: true }) //Using Options to return the updated object
    if (!task) {
        res.status(404).send({ msg: `no task with id : ${taskID}` })
    }
    //res.status(202).send('Update Task')
    res.status(202).json({ task })

})

const deleteTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params
    const task = await Task.findByIdAndDelete(taskID)
    if (!task) {
        return next(createCustomError({ msg: `no task with id : ${taskID}` }, 404))
    }
    res.status(202).json(task)
})

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

module.exports = { createTask, getTask, updateTask, deleteTask, getAllTasks }