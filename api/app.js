const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./queries')

app.use(bodyParser.json())
app.use(cors())
app.use('/problems', db.getProblems)

module.exports = app