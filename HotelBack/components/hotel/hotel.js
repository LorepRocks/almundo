'use strict'

const mongoose = require('mongoose')
const textSearch = require('mongoose-text-search')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  stars: {
    type: Number
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  amenities: {
    type: Array,
    required: false
  }
})
// plugin utilizado para poder utilizar los indices tipo text de mongoDB
hotelSchema.plugin(textSearch)

hotelSchema.index({
  name: 'text',
  starts: 1
})

let Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel
