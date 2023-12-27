const express = require('express')
const router = express.Router()
const { createTodo , getTodos , updateTodo , deleteTodo } = require('../Controllers/todoController')

router.post('/getTodos', getTodos)
router.post('/createTodo', createTodo)
router.put('/update/:id' , updateTodo)
router.delete('/delete/:id' , deleteTodo)

module.exports = router