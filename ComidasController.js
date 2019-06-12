const { connect } = require('./ComidasRepository')
const comidasModel = require('./ComidasSchema')

connect() // para conectar no mongoDB

const getAll = async () => {
  return comidasModel.find((error, comidas) => {
    return comidas
  })
}

const getById = async (id) => {
  return comidasModel.findById(
    id,
    (error, comida) => {
      return comida
    }
  ) 
}

const add = async (comida) => {
  const novaComida = new comidasModel(comida)
  return novaComida.save()
}


const remove = async (id) => {
  return comidasModel.findByIdAndDelete(id)
}

const update = async (id, comida) => {
  return comidasModel.findByIdAndUpdate(
    id,
    { $set: comida },
    { new: true }, // RETORNAR A COMIDA JA ATUALIZADA NO CALLBACK
    function (error, comida) { // é o nosso callback
      return comida
    }
  )
}

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}