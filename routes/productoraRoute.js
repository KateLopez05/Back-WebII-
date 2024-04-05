const {
    crearProductora, 
    consultarProductora, 
    actualizarProductora, 
    borrarProductora
} = require('../controllers/productoraController')

const { Router } = require('express')

const router = Router()

// crear (Create) una productora
router.post('/', crearProductora)

// Leer (Read) las productoras
router.get('/', consultarProductora)

// actualizar (Update) una productora por ID
router.put('/:id', actualizarProductora)

// borrar (Delete) una productora  por ID
router.delete('/:id', borrarProductora)

module.exports = router