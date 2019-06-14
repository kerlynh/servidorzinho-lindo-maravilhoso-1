const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/comidas', async (request, response) => {
  controller.getAll()
    .then(comidas => response.send(comidas))
})

servidor.get('/comidas/:id', async (request, response) => {
  // const id = request.params.id
  // response.send(controller.getById(id))
  const id = request.params.id
  controller.getById(id)
    .then(comida => response.send(comida))
})

servidor.post('/comidas', (request, response) => {
  controller.add(request.body)
    .then(comida => {
      const _id = comida._id
      response.send(_id)
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
})

servidor.patch('/comidas/:id', async (request, response) => {
  const id = request.params.id
  controller.update(id, request.body)
    .then(response.sendStatus(204))
})

servidor.delete('/comidas/:id', (request, response) => {
  controller.remove(request.params.id)
    .then(comida => {
      if(comida === null || comida === undefined){ // if(!comida) 
        response.sendStatus(404) // not found
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400) //bad request
      } else {
        response.sendStatus(500)
      } 
    })
})

servidor.listen(3000)
console.log("servidorzinho rodando na porta 3000")
