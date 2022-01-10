const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/:id', (req, res) => {
  const sql = `
  SELECT * FROM students
  WHERE id = ${req.params.id}
  `
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  const { id, full_name, base_class, subjects } = req.body

  const sql = `
  INSERT INTO mydb.students (id, full_name, base_class, subjects) VALUES (${id}, '${full_name}', ${base_class}, '${subjects}')`
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

router.put('/:id', (req, res) => {
  const studentId = req.params.id
  const { id, full_name, base_class, subjects } = req.body

  const sql = `
  UPDATE mydb.students SET id = ${id} , full_name = '${full_name}', base_class = ${base_class}, subjects = '${subjects}' 
  WHERE id = ${studentId}
  `
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

module.exports = router
