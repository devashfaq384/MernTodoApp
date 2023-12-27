const express = require('express')
const app = express()
const port = 5000
const todoRoutes = require('./Routes/todoRoutes')
const UserRoutes = require('./Routes/userRoutes')
const connectToMongo = require('./db')
const cors = require('cors')

connectToMongo()
app.use(cors())
app.use(express.json())


app.use('/todo' , todoRoutes)
app.use('/user' , UserRoutes )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})