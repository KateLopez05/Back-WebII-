const {
    crearTipo, 
    consultarTipo, 
    actualizarTipo, 
    borrarTipo
} = require('../controllers/tipoController')

const { Router } = require('express')

const router = Router()

// crear (Create) un tipo de multimedia
router.post('/', crearTipo)

// Leer (Read) el tipo de multimedia
router.get('/', consultarTipo)

// actualizar (Update) un tipo de multimedia por ID
router.put('/:id', actualizarTipo)

// borrar (Delete) un tipo de multimedia  por ID
router.delete('/:id', borrarTipo)

module.exports = router