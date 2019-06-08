const { comidas } = require('./ComidasRepository')

const getAll = () => {
  return comidas.pratosFavoritos
}

const add = (comida) => {
  comida.id = Math.random().toString(36).substr(-8)
  getAll().push(comida)
  return comida
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
  update
}