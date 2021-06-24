const express = require('express')
const { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ sucess: true, data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ sucess: true, msg: 'please provide a name value' })
    } else {
        res.status(201).json({ sucess: true, person: name })
    }
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)

    const person = people.find(person => person.id === Number(id))

    if (!person) {
        return res.status(404).json({ sucess: false, msg: `no persion with id ${id}` })
    } else {
        const newPeople = people.map(person => {
            if (person.id === Number(id)) {
                person.name = name
            }
            return person
        })
        res.status(201).json({ sucess: true, data: newPeople })

    }
    res.send('done')
}

const deletePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)

    const person = people.find(person => person.id === Number(id))

    if (!person) {
        return res.status(404).json({ sucess: false, msg: `no persion with id ${id}` })
    } else {
        const newPeople = people.filter(p => p.id !== Number(id))
        res.status(201).json({ sucess: true, data: newPeople })

    }
    res.send('done')
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ sucess: true, msg: 'please provide a name value' })
    } else {
        res.status(201).json({ sucess: true, person: name })
    }
}

module.exports = { 
    getPeople,
    createPerson,
    updatePerson,
    deletePerson,
    createPersonPostman
}