const express = require('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3001
require('dotenv').config()

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
}

const db = mysql.createConnection(dbConfig)

const teacherRouter = require('./teacher')

app.get('/', (req, res) => {
  res.send('welcome')
})

app.use('/teacher', teacherRouter)

app.listen(PORT, console.log(`Listening on ${PORT}`))
