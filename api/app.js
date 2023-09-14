const express = require('express')
const config = require('./config')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./queries')
const timeStamp = require('./timestamp')

mongoose.set('strictQuery', false)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

app.use(bodyParser.json())
app.use(cors())
app.use('/problems', db.getProblems)

const getStamp = async () => {
  const stamp = new timeStamp({
    time: Date.now()
  })
  
  try {
    response = await stamp.save()
    console.log(response)
  } catch(e) {
    console.log(e)
  }
}

getStamp();


module.exports = app