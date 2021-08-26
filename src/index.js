// creating express instance
const express = require('express')
const app = express()

//middlewares
const rateLimiter = require('./middlewares/rateLimiter')

// services
const usersGeneratorService = require('./services/usersGenerator.service')

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.get('/user', rateLimiter, (request, response) => {
  return response.status(200).json(usersGeneratorService())
})

app.get('/', (request, response) => {
  response.redirect('/user')
})

// server start
app.listen(3000, () => {
  console.log('Server open in http://localhost:3000')
})
