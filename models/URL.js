const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UrlSchema = new Schema({
  shortURL: { type: String, required: true },
  originalURL: { type: String, required: true },
})

module.exports = mongoose.model('URL', UrlSchema) 