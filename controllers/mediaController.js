const Medias = require('../models/media')
const {request, response} = required('express')

const crearMedia= async (req = request, res = response) => {
    try {
        const body = req.body
        const agregado = new Medias(body)

        await Medias.save()

        return res.status(201).json(agregado)
    } catch (error) {
        return res.status(500).json({ mensaje : error })
    }
}

const consultarMedia = async(req = request, res = response) => {
    try {
        const { todo } = req.query
        const consultaTodo = await Medias.find({todo})

        return res.json(consultaTodo)
    } catch (error) {
        return res.status(500).json({mensaje: error})
    }
}

const actualizarMedia = async(req = request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body
    
        body.fechaActualizacion = new Date()
        
        const media = await Medias.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(media)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const borrarMedia = async(req= request, res= response) => {
    try {
        const id= req.params.id

        await Medias.findByIdAndDelete(id)

        return res.status(204).json({ mensaje: "Media borrada" })
    } catch (error) {
        return re.status(500).json({ mensaje: error})
    }
}

module.exports= {
    crearMedia, 
    consultarMedia, 
    actualizarMedia, 
    borrarMedia
}