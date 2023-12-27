const Todo = require('../models/todoModel')

const createTodo = async (req, res) => {
    console.log(req.body)

    const newTodo = await Todo.create(req.body)

    res.json(newTodo)
}

const getTodos = async (req , res) => {
    const userId = req.body._id
    console.log(req.body)
    const todos = await Todo.find({ userId })
    console.log(todos)
    res.json(todos)
}

const updateTodo = async (req , res) => {
    await Todo.findByIdAndUpdate(req.params.id , req.body)

    const updatedTodo = await Todo.findById(req.params.id)

    res.json(updatedTodo)
}

const deleteTodo = async (req , res) => {
    if(req.params.id === 'undefined' || req.params.id === null){
        res.json("ID Not Found")
    } 

    await Todo.findByIdAndDelete(req.params.id)
    
    res.json("Deleted Success")
}

module.exports = { createTodo , getTodos , updateTodo , deleteTodo }