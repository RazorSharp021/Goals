const express = require('express')
// makes a dotenv file with our variables in it 
const dotenv = require('dotenv').config() 
const { errorHandler } = require('../backend/middleware/errorMiddleware')
const connectDb = require('./config/db')
const port = process.env.PORT || 3000

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
