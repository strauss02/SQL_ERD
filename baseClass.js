const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/:num', (req, res) => {
  const sql = `
  SELECT * FROM base_classes
  WHERE base_class_num = ${req.params.num}
  `
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

router.put('/:num', (req, res) => {
  const base_class_num = req.params.num
  const { leading_teacher_id } = req.body

  const sql = `
  UPDATE mydb.base_classes
  SET leading_teacher_id = ${leading_teacher_id} 
  WHERE base_class_num = ${base_class_num}
  `
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

module.exports = router
