const express = require('express')
const mysql = require('mysql2')

const router = express.Router()

router.get('/:id', (req, res) => {
  console.log(req.params)

  res.send('you have arrived at the teacher route')
})

module.exports = router
