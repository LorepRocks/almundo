'use strict'
// Load the module dependencies
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const app = express()

// Configuración de bodyParser
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

// Configuración de seguridad de headers
app.use(helmet())
// Enable cors's middleware
app.use(cors())

require('../components/hotel/hotelRoutes.js')(app)

// Unicamente en ambiente de desarrollo
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

module.exports = app
