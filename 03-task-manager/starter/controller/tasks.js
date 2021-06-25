

const createTask = ( req, res) => {
    res.status(201).send('Create Task')
}

const getTask = ( req, res) => {
    res.status(200).send('Get single task')
}

const updateTask = ( req, res) => {
    res.status(202).send('Update Task')
}

const deleteTask = ( req, res) => {
    res.status(202).send('Delete Task')
}

const getAllTasks = ( req, res) => {
    res.status(200).send('Get all tasks')
}

module.exports = {createTask,getTask,updateTask,deleteTask,getAllTasks}