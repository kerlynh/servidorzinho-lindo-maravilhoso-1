const { connect } = require('./ComidasRepository')
const comidasModel =  require('./ComidasSchema')
connect()

const getAll = async () => {
  //pegue todas as comidas do mongodb usando mongoose
  //nome da collections:comida
  return comidasModel.find((error, comidas) => {
    return comidas
  })
}

const getById = (id) => {
  // const comidaCadastrada = getAll().find(comida => {
  //   return comida.id === id
  // })
  // return comidaCadastrada
  return comidasModel.findById(
    id,
    (error, comida) => {
      return comida
    }
  )
}

const add = (comida) => {
  //TODO: usar o mongoose para inserir uma nova comida
  const novaComida = new comidasModel ({
    nome: comida.nome,
    descicao: comida.descricao
  })
  novaComida.save()
}

const remove = (id) => {
  comidas.pratosFavoritos = getAll().filter((comida) => {
    return comida.id !== id
  })
}

const update = (id, comida) => {
  let comidaCadastrada = getAll().find(comida => {
    return comida.id === id
  })
  if(comidaCadastrada === undefined){
    return false
  } else {
  
  // if(comida.nome !== undefined) {
  //   comidaCadastrada.nome = comida.nome
  // }
  
  // if(comida.descricao !== undefined) {
  //   comidaCadastrada.descricao = comida.descricao
  // }
  const comidaAtualizada = {
    ...comidaCadastrada, // spread operator do ES6
    ...comida
  }
  remove(id)
  getAll().push(comidaAtualizada)
  
  return true
}
}

module.exports = {
  getAll,
  add,
  remove,
  update,
  getById
}