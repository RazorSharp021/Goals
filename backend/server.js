const express = require('express')
// makes a dotenv file with our variables in it 
const dotenv = require('dotenv').config() 
const { errorHandler } = require('../backend/middleware/errorMiddleware')
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
