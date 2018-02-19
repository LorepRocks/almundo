'use strict'

const hotelLogic = require('./hotelLogic')

/**
 * Método que recibe la petición para consultar los hoteles
 * @param  {[type]} req [en req.query se reciben los atributos name y stars para filtrar los hoteles]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
let getHotels = (req, res) => {
  let filterParams = {
    name: req.query.name,
    stars: req.query.stars
  }
  console.log('req.body', filterParams)
  return new Promise((resolve, reject) => {
    hotelLogic.getHotels(filterParams)
      .then((response) => resolve(
          res.status(200).send({
            message: response
          })
      )).catch((err) => reject(
          res.status(400).send({
            message: err
          })
      ))
  })
}

/**
 * Método que recibe la petición de creación de un hotel
 * @param  {[type]} req [en req.body espera el atributo hotel, el cual contiene la estructura de un hotelSchema]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
let saveHotel = (req, res) => {
  return new Promise((resolve, reject) => {
    hotelLogic.saveHotel(req.body.hotel)
    .then((response) => resolve(
      res.status(200).send({
        message: response
      })
    )).catch((err) => reject(
      res.status(400).send({
        message: err
      })
    ))
  })
}

/**
 * Método que recibe la petición de actualización de un hotel
 * @param  {[type]} req [en req.body espera el atributo hotel, el cual contiene la estructura de un hotelSchema]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
let updateHotel = (req, res) => {
  return new Promise((resolve, reject) => {
    hotelLogic.updateHotel(req.body.hotel)
    .then((response) => response(
      res.status(200).send({
        message: response
      })
    )).catch((err) => reject(
      res.status(400).send({
        message: err
      })
    ))
  })
}

/**
 * Método que recibe la petición de eliminar un hotel
 * @param  {[type]} req [en req.params espera recibir el atributo hotelId el cual corresponde al _id del documento a eliminar]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
let deleteHotel = (req, res) => {
  return new Promise((resolve, reject) => {
    hotelLogic.deleteHotel(req.params.hotelId)
    .then((response) => resolve(
      res.status(200).send({
        message: response
      })
    )).catch((err) => reject(
      res.status(400).send({
        message: err
      })
    ))
  })
}

module.exports = {
  getHotels,
  saveHotel,
  updateHotel,
  deleteHotel
}
