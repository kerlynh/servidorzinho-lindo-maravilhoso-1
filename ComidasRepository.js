const mongoose = require('mongoose')

//string de conexão:
//mongodb://dominio:porta/nome_database
const MONGO_URL = "mongodb://localhost:27017/reprograma"

function connect() {
  //TODO: conectar no nosso mongo usando a MONGO_URL
  mongoose.connect(MONGO_URL,
    {useNewUrlParser: true},
    function (error) {
      if(error) {
        console.error("Deu erro", error)
      } else {
        console.log("Conectamos no mongodb!!! o/")
      }
    }  
  )
}

module.exports = {connect}