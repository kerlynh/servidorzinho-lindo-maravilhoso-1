const mongoose = require('mongoose')

//cada schema equivale collection - formato da coleção
const Schema =mongoose.Schema

const comidasSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    nome: {type: String, required: true}, //obrigatório
    descricao: {type: String} //opcinal
})

//model - como acessar a coleção
const comidasModel = mongoose.model("comidas", comidasSchema)

module.exports = comidasModel