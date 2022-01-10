const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/:id', (req, res) => {
  const sql = `
  SELECT * FROM subjects
  WHERE id = ${req.params.id}
  `
  db.query(sql, function (err, result) {
    if (err) throw err
    res.send(JSON.stringify(result))
  })
})

module.exports = router
