const {
    crearMedia, 
    consultarMedia, 
    actualizarMedia, 
    borrarMedia
} = require('../controllers/mediaController')

const { Router } = require('express')

const router = Router()

// crear (Create) una media
router.post('/', crearMedia)

// Leer (Read) las medias
router.get('/', consultarMedia)

// actualizar (Update) una media por ID
router.put('/:id', actualizarMedia)

// borrar (Delete) una media  por ID
router.delete('/:id', borrarMedia)

module.exports = router