const {Schema, model} = require('mongoose')

const DirectorSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        minLenght: 1
    },
    estado: {
        type: boolean,
        default: true,
        required: true
    }, 
    fechaCreacion: {
        type: Date,
        default: new Date()
    }, 
    fechaActualizacion: {
        type: Date
    }
})

module.exports = model('Director', DirectorSchema)