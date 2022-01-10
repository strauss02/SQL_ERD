const express = require('express')
const app = express()
const PORT = 3001
const teacherRouter = require('./teacher')
const studentRouter = require('./student')
const subjectRouter = require('./subject')
const baseClassRouter = require('./baseClass')
const db = require('./db')
const { json } = require('body-parser')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome')
})

app.get('/test', (req, res) => {
  const sql = `SELECT * FROM students`
  db.query(sql, function (err, result, fields) {
    console.log(result)
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)
app.use('/subject', subjectRouter)
app.use('/base_class', baseClassRouter)

app.listen(PORT, console.log(`Listening on ${PORT}`))
