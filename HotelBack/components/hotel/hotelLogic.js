'use strict'

const hotelDAL = require('./hotelDAL')
const util = require('../utils/index')

/**
 * Método que se comunica con la capa de acceso a datos para obtener la lista
 * de hoteles
 * @param  {[type]} params [objeto {name: "nombre hotel a buscar", stars: 4} ]
 * @return {[type]}        [description]
 */
let getHotels = (params) => {
  return new Promise((resolve, reject) => {
    // Se obtiene la sentencia de filtro para consultar en mongoDB
    let filteSentence = util.utils.getFilterSentence(params)
    hotelDAL.getHotels(filteSentence).then((hotels) => resolve(hotels))
    .catch((err) => reject(err))
  })
}

/**
 * Método que se comunica con la capa de acceso a datos para guardar un nuevo hotel
 * @param  {[type]} hotel [objeto de tipo hotelSchema]
 * @return {[type]}       [description]
 */
let saveHotel = (hotel) => {
  return new Promise((resolve, reject) => {
    hotelDAL.saveHotel(hotel).then((message) => resolve(message))
    .catch((err) => reject(err))
  })
}

/**
 * Método que se comunica con la capa de acceso a datos para atualizar un hotel
 * @param  {[type]} hotel [objeto tipo hotelSchema]
 * @return {[type]}       [description]
 */
let updateHotel = (hotel) => {
  return new Promise((resolve, reject) => {
    hotelDAL.updateHotel(hotel)
    .then((response) => resolve(response))
    .catch((err) => reject(err))
  })
}

/**
 * Método que se comunica con la capa de acceso a datos para remover un hotel de la colección
 * @param  {[type]} hotelId [_id del documento que se removerá de la colección]
 * @return {[type]}         [description]
 */
let deleteHotel = (hotelId) => {
  return new Promise((resolve, reject) => {
    hotelDAL.deleteHotel(hotelId)
    .then((response) => resolve(response))
    .catch((err) => reject(err))
  })
}

module.exports = {
  getHotels,
  saveHotel,
  updateHotel,
  deleteHotel
}
