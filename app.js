const express = require('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3001
const teacherRouter = require('./teacher')
require('dotenv').config()
const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}
const db = mysql.createConnection(dbConfig)
db.connect((err) => {
  if (err) console.log(err)
  console.log('connected to MYSQL DB')
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

app.get('/', (req, res) => {
  res.send('welcome')
})

app.listen(PORT, console.log(`Listening on ${PORT}`))
