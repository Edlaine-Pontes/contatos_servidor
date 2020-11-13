const mogoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/reprograma'

const connect = ()=>{
    mogoose.connect(DB_URL, { useNewUrlParser: true })
    const connection = mogoose.connection
    connection.on('error', ()=> console.error('Erro ao se conectar'))
    connection.once('open', ()=> console.log('Conectamos no Mongo'))
}

module.exports = { connect }

//arquivo Repository cria a conexao com o banco de dados, neste caso com o MongoDB é padrao
