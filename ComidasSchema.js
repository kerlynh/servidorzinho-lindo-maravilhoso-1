const mongoose = require('mongoose')

const Schema = mongoose.Schema

const comidasSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    nome: {type: String, required: true},
    descricao: {type: String},
    valor: {type: Number},
    imagem: {type: String}
})

const comidasModel = mongoose.model("comidas", comidasSchema)

module.exports = comidasModel