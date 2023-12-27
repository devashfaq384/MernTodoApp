const mongoose = require('mongoose')
const URI = 'mongodb+srv://ashfaqahmad:ashfaq123@todo.r7jnozc.mongodb.net/'

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(URI)
        console.log('connected to db')
        
    } catch (error) {
        console.log('there is error in db.js')
    }
}

module.exports = connectToMongo