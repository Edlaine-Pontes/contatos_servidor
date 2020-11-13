const express = require('express')
const app = express()
const cors = require('cors')



const index = require('./routes/index')
const contatos = require('./routes/contatosRoutes')
const db = require('./models/repository')

db.connect()
app.use(cors())
app.use(express.json())

app.use('/', index)
app.use('/contatos', contatos)


module.exports = app