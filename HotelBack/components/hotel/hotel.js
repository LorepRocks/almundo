'use strict'

const mongoose = require('mongoose')
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

hotelSchema.index({
  name: 1,
  starts: 1
})

let Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel
