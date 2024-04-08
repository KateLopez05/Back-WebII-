const {Schema, model} = require('mongoose')

const DirectorSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        minLenght: 1
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    }, 
    fechaCreacion: {
        type: Date,
        default: new Date()
    }, 
    fechaActualizacion: {
        type: Date, 
        default: new Date()
    }
})

module.exports = model('Director', DirectorSchema)