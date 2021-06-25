const express = require('express')
const tasks = require('../controller/tasks')
const router = express.Router()

const {createTask,getTask,updateTask,deleteTask,getAllTasks} = tasks

//Shortend version with chaining
router.route('/').get(getAllTasks)
router.route('/:id').get(getTask).post(createTask).put(updateTask).patch(updateTask).delete(deleteTask)

module.exports = router

