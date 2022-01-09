const express = require('express')
const app = express()
const PORT = 3001

const teacherRouter = require('./teacher')

app.get('/', (req, res) => {
  res.send('welcome')
})

app.use('/teacher', teacherRouter)

app.listen(PORT, console.log(`Listening on ${PORT}`))
