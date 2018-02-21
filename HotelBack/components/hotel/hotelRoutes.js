'use strict'

const hotelService = require('./hotelService')

module.exports = function (app) {
  app.route('/api/getHotels').post(hotelService.getHotels)
  app.route('/api/saveHotel').post(hotelService.saveHotel)
  app.route('/api/updateHotel').post(hotelService.updateHotel)
  app.route('/api/deleteHotel/:hotelId').delete(hotelService.deleteHotel)
}
