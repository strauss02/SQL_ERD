const mysql = require('mysql2')
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

module.exports = db
