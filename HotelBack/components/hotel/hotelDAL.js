'use strict'

const Hotel = require('./hotel')
const ObjectId = require('mongoose').Types.ObjectId

/**
 * Método que consulta los hoteles de acuerdo al filtro recibido
 * @param  {[type]} filterSentence [esta sentencia tiene la estructura de un objeto de búsqueda en mongoDB]
 * @return {[type]}                [description]
 */
let getHotels = (filterSentence) => {
  return new Promise((resolve, reject) => {
    Hotel.find(filterSentence).then((hotels) => resolve(hotels))
    .catch((err) => reject(err))
  })
}

/**
 * Método que guarda un hotel en la base de datos
 * @param  {[type]} hotel [objeto de tipo hotelSchema]
 * @return {[type]}       [description]
 */
let saveHotel = (hotel) => {
  return new Promise((resolve, reject) => {
    let hotelModel = new Hotel(hotel)
    hotelModel.save(hotel).then((savedHotel) => resolve(savedHotel))
    .catch((err) => reject(err))
  })
}

/**
 * Método que actualiza la información de un hotel en la base de datos
 * @param  {[type]} hotel [objeto de tipo hotelSchema]
 * @return {[type]}       [description]
 */
let updateHotel = (hotel) => {
  const whereArgs = {
    _id: new ObjectId(hotel._id)
  }
  const updateParams = {
    $set: {
      name: hotel.name,
      price: hotel.price,
      image: hotel.image,
      stars: hotel.stars,
      amenities: hotel.amenities
    }
  }
  const updateConfig = {
    runValidators: true,
    context: 'query',
    new: true
  }

  return new Promise((resolve, reject) => {
    Hotel.findOneAndUpdate(whereArgs, updateParams, updateConfig)
    .then((updatedHotel) => resolve(updatedHotel))
    .catch((err) => reject(err))
  })
}

/**
 * Método que remueve un hotel de la base de datos
 * @param  {[type]} hotelId [_id del hotel a eliminar]
 * @return {[type]}         [description]
 */
let deleteHotel = (hotelId) => {
  const message = 'Hotel eliminado correctamente'
  return new Promise((resolve, reject) => {
    let objectId = new ObjectId(hotelId)
    Hotel.remove({_id: objectId}).then(() => resolve(message))
    .catch((err) => reject(err))
  })
}

module.exports = {
  getHotels,
  saveHotel,
  updateHotel,
  deleteHotel
}
