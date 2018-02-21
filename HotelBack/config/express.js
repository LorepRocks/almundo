'use strict'
// Load the module dependencies
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const app = express()

if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan')
    app.use(morgan('dev'))
}
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


module.exports = app
