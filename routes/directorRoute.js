const {
    crearDirector, 
    consultarDirector, 
    actualizarDirector, 
    borrarDirector
} = require('../controllers/directorController')

const { Router } = require('express')

const router = Router()

// crear (Create) un director principal
router.post('/', crearDirector)

// Leer (Read) los directores
router.get('/', consultarDirector)

// actualizar (Update) un director por ID
router.put('/:id', actualizarDirector)

// borrar (Delete) un director  por ID
router.delete('/:id', borrarDirector)

module.exports = router