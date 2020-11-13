const express = require('express')
const router = express.Router()
const controller = require('../controller/contatosController')


// @route GET contatos
// @desc Retornar todas os contatos
// @access Public 
// @endpoint http://localhost:porta/
router.get('/', controller.getAll)

// @route POST contato
// @desc Criar um novo contato
// @access Public 
// @endpoint http://localhost:porta/criar
router.post('/criar', controller.addContato)

// @route GET nome
// @desc Retorna contato por nome
// @access Public 
// @endpoint http://localhost:porta/nome
router.get('/nome/:nome', controller.getByNome)

// @route GET id
// @desc Retorna contato por id
// @access Public 
// @endpoint http://localhost:porta/id
router.get('/id/:id', controller.getById)

// @route Delete id
// @desc deleta contato por id
// @access Public 
// @endpoint http://localhost:porta/deletar/
router.delete('/deletar/:id', controller.deleteContato)

// @route PUT telefone
// @desc Alterar o campo celular do cadastro
// @access Public 
// @endpoint http://localhost:porta/atualizar/telefone/id
router.put('/atualizar/telefone/:id', controller.updateNumContato)

// @route PUT Id
// @desc alterar todo o cadastro
// @access Public 
// @endpoint http://localhost:porta/atualizar/id
router.put('/atualizar/:id', controller.updateContato)

module.exports = router;
