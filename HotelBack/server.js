'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const mongoose = require('mongoose')
const app = require('./config/express')
const config = require('./config/config')
const port = process.env.SERVER_PORT || 3020

mongoose.Promise = Promise

mongoose.connect(config.uri)
  .then(() => {
    app.listen(port, () => {
      console.log('Server running on port: ' + port)
      module.exports = app
    })
  })
  .catch(err => {
    console.log(err)
  })
