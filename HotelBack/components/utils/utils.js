'use strict'

/**
 * Método que recibe un arreglo de parámetros a filtrar, cada parámetro de filtro contiene { key : value, type: text/number}
 * dinámicamente se valida el arreglo recibido para armar la sentencia final que será enviada a la base de datos para filtrar
 * @param  {[type]} params [arreglo de parámetros de filtro]
 * @return {[type]}        [description]
 */
let getFilterSentence = (params) => {
    let sentence = {};
    let filterParams = {};
    let union = [];
    let operatorAnd = "$and";

    for (let param of params) {
        var key = Object.keys(param);
        if (param.type === "text") {
            filterParams[key[0]] = {
                "$regex": new RegExp(param[key[0]],"i")
            };
        } else if (param.type === "number") {
            filterParams[key[0]] = {
                "$eq": param[key[0]]
            };
        }
    }

    if (params.length > 1) {
        union.push(filterParams);
        sentence[operatorAnd] = union;
    } else {
        sentence = filterParams;
    }
    console.log("filterParams",sentence);
    return sentence;
}

module.exports = {
    getFilterSentence
}
