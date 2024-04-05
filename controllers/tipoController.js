const Tipos = require('../models/tipo')
const {request, response} = require('express')

const crearTipo= async (req = request, res = response) => {
    try {
        const body = req.body
        const tipoMultimedia = new Tipos(body)

        await Tipos.save()

        return res.status(201).json(tipoMultimedia)
    } catch (error) {
        return res.status(500).json({ mensaje : error })
    }
}

const consultarTipo = async(req = request, res = response) => {
    try {
        const { descripcion } = req.query
        const descripcionProductora = await Tipos.find({descripcion})

        return res.json(descripcionProductora)
    } catch (error) {
        return res.status(500).json({mensaje: error})
    }
}

const actualizarTipo = async(req = request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body
    
        body.fechaActualizacion = new Date()
        
        const tipos = await Tipos.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(tipos)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const borrarTipo = async(req= request, res= response) => {
    try {
        const id= req.params.id

        await Tipos.findByIdAndDelete(id)

        return res.status(204).json({ mensaje: "Tipo multimedia borrado" })
    } catch (error) {
        return re.status(500).json({ mensaje: error})
    }
}

module.exports= {
    crearTipo, 
    consultarTipo, 
    actualizarTipo, 
    borrarTipo
}