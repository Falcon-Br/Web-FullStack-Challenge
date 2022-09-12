//Todas as rotas

const express = require('express')
const router = express.Router()

const dispositivoController = require('./controllers/dispositivoCotroller')

//Lê todos os dispositivos
router.get('/dispositivos', dispositivoController.buscarTodos)

//Lê um dispositivo
router.get('/dispositivos/:id', dispositivoController.buscarUm)

//Insere um dispositivo
router.post('/dispositivo', dispositivoController.inserir)

//Altera um dispositivo
router.put('/dispositivo/:id', dispositivoController.alterar)

//Deleta um dispositivo
router.delete('/dispositivo/:id', dispositivoController.excluir)

module.exports = router