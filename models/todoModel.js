const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    userId : String
})

module.exports = mongoose.model('Todo', todoSchema)