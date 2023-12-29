const express = require('express')
const app = express()
const port = 5000
const todoRoutes = require('./Routes/todoRoutes')
const UserRoutes = require('./Routes/userRoutes')
const connectToMongo = require('./db')
const cors = require('cors')

connectToMongo()


app.use(cors(
  {
    origin: ['https://mern-todo-app-taupe-iota.vercel.app'],
    methods : [ GET , PUT , POST , DELETE ]
    credentials : true
  }
));
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/todo' , todoRoutes)
app.use('/user' , UserRoutes )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
