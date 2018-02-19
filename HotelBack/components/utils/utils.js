'use strict'

/**
 * Método que recibe un objeto y sobre este realiza validaciones para determinar cual es el objeto
 * de consulta que mongoDB deberá llevar en su función .find
 * si los atributos name y stars llegan vacios, se deben devolver todos los hoteles existentes
 * @param  {[type]} params [objecto con la estructura: {name : "nombre del hotel a buscar"m stars: 4 (número de estrellas)}]
 * @return {[type]}        [description]
 */
let getFilterSentence = (params) => {
  let sentence = {}
  console.log('params utils', params)
  if (params.name !== '' && params.stars === '') {
    sentence = { $text: {$search: params.name} }
  } else if (params.name !== '' && params.stars !== '') {
    sentence = {$and: [{$text: {$search: params.name}}, {stars: {$eq: params.stars}}]}
  } else if (params.name === '' && params.stars !== '') {
    sentence = {stars: {$eq: params.stars}}
  }
  console.log('sentence', JSON.stringify(sentence, null, 4))
  return sentence
}

module.exports = {
  getFilterSentence
}
