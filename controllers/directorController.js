const Directores = require('../models/director')
const {request, response} = require('express')

const crearDirector= async (req = request, res = response) => {
    try {
        const body = req.body
        const directorPrincipal = new Director(body)

        await directorPrincipal.save()

        return res.status(201).json(Director)
    } catch (error) {
        return res.status(500).json({ mensaje : error })
    }
}

const consultarDirector = async(req = request, res = response) => {
    try {
        const { estado } = req.query
        const directores = await Directores.find({estado})

        return res.json(directores)
    } catch (error) {
        return res.status(500).json({mensaje: error})
    }
}

const actualizarDirector = async(req = request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body
    
        body.fechaActualizacion = new Date()
        
        const directores = await Directores.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(directores)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const borrarDirector = async(req= request, res= response) => {
    try {
        const id= req.params.id

        await Director.findByIdAndDelete(id)
        return res.status(204).json({ mensaje: "Director borrado" })
    } catch (error) {
        return res.status(500).json({ mensaje: error})
    }
}

module.exports= {
    crearDirector, 
    consultarDirector, 
    actualizarDirector, 
    borrarDirector
}