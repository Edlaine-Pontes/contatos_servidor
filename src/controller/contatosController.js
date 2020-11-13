const contatoCollections = require('../models/contatoSchema')

const getAll = (req, res) => {
    contatoCollections.find((error, contato) =>{
        if(error){
            return res.status(500).send(error)
        } else {
            return res.status(200).json({
                mensagem: "Atualizado com sucesso",
                contato
            })
        }
    })
}

const addContato = (req, res) => {
    const contatoDoBody = req.body //pegando o body que o usuario digitou
    const contato = new contatoCollections(contatoDoBody) // criando um novo dado com o body

    contato.save((error) => {
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(200).send({
                mensagem: "Post realizado com sucesso",
                contato
            })
        }
    })
}


const getById = (req, res) => {

    console.log(req.url)
    const id = req.params.id

    contatosCollection.findById(id, (error, contato) => {
        if (error) {
            return res.status(500).send(error)
        } else if (contato) {
            return res.status(200).send({ 
                mensagem: 'Get realizado com sucesso!',
                contato })
        } else {
            return res.status(404).send({
                mensagem: 'Id não encontrado!' })
        }
    })
}

const getByNome = (req, res) => {

    console.log(req.url)
    const { name } = req.params

    contatosCollection.find(name, (error, contato) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (contato == "") {
                return res.status(404).send({ 
                    mensagem: 'Contato não localizado! ',
                     contato })
            } else {
                return res.status(200).send({ 
                    mensagem: 'Get realizado com sucesso! ',
                    contato })
            }
        }
    })
}

const deleteContato = (req, res) => {

    const { id } = req.params

    contatosCollection.findByIdAndDelete(id, (error, contato) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (contato) {
                return res.status(200).send({ 
                    mensagem: 'Deletado com sucesso! ',
                     contato })
            } else {
                return res.status(404).send({ 
                    mensagem: 'O contato informado não foi encontrado' })
            }
        }

    })
}

const updateNumContato = (req, res) => {

    console.log(req.url)
    const { id } = req.params
    const body = req.body
    const update = { new: true }

    if (body.nome != null || body.dataNascimento != null) {
        return res.status(400).json({ 
            mensagem: 'Permissao para edição apenas no campo celular' })
    } else {
        contatosCollection.findByIdAndUpdate(id, body, update, (error, contato) => {
            if (error) {
                return res.status(500).send(error)
            } else if (contato) {
                return res.status(200).send({ 
                    mensagem: 'Celular atulizado com sucesso!',
                     contato })
            } else {
                return res.status(404).send({ mensagem: 'Contato não localizado.' })
            }
        })
    }
}

const updateContato = (req, res) => {

    console.log(req.url)
    const { id } = req.params
    const body = req.body
    const update = { new: true }

    contatosCollection.findByIdAndUpdate(id, body, update, (error, contato) => {

        if (error) {
            return res.status(500).send({ 
                mensagem: 'Desculpe, ocorreu um erro!' + error })
        } else {
            return res.status(200).send({ 
                mensagem: 'Atualizado com sucesso!', 
                contato })
        }
    })
}

module.exports = {
    getAll,
    addContato,
    getById,
    getByNome,
    deleteContato,
    updateNumContato,
    updateContato,

}