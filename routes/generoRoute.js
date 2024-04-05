const {
    crearGenero, 
    consultarGenero, 
    actualizarGenero, 
    borrarGenero
} = require('../controllers/generoController')

const { Router } = require('express')

const router = Router()

// crear (Create) un género
router.post('/', crearGenero)

// Leer (Read) los generos
router.get('/', consultarGenero)

// actualizar (Update) un género por ID
router.put('/:id', actualizarGenero)

// borrar (Delete) un genero  por ID
router.delete('/:id', borrarGenero)

module.exports = router