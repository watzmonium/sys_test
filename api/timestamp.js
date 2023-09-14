const mongoose = require('mongoose')
const { Schema, model } = mongoose

const timeSchema = new Schema({
  time: String
})

timeSchema.set('toJSON')

module.exports = model('timestamp', timeSchema)