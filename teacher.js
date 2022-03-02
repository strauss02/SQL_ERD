const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/:id', (req, res) => {
  const sql = `
  SELECT * FROM teachers
  WHERE id = ${req.params.id}
  `
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  const { id, full_name, teaches_subjects } = req.body

  const sql = `
  INSERT INTO mydb.teachers (id, full_name, teaches_subjects) VALUES (${id}, '${full_name}', '${teaches_subjects}')`
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

module.exports = router
