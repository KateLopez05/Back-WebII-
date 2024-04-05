const {Schema, model} = require('mongoose')

const GeneroSchema = Schema({
    nombre:{
        type: String,
        unique: [true, 'Nombre es único'],
        required: [true, 'El nombre es requerido'],
        minLenght: 1
    },
    estado:{
        type: boolean,
        default: true,
        required: true
    }, 
    fechaCreacion:{
        type: Date,
        default: new Date()
    }, 
    fechaActualizacion:{
        type: Date,
        default: new Date()
    }, 
    descripcion:{
        type: String
    }
})

module.exports = model('Genero', GeneroSchema)