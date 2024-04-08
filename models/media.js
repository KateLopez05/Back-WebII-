const {Schema, model} = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial es requerido'],
        unique: [true, 'Serial ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo es requerido']
    },
    sinopsis: {
        type: String
    },
    url: {
        type: String
    },
    imagen: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    }, 
    fechaActualizacion: {
        type: Date, 
        default: new Date()
    },
    fechaEstreno: {
        type: Date
    },
    genero: {
        type: Schema.Types.ObjectId, 
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    }
})

module.exports = model('Media', MediaSchema)