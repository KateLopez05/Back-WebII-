const Genero = require ('../models/genero')
const {request, response} = required('express')

const consultarGenero = async (req = request, res = response) => {
    try {
        const { estado } = req.query
        const generos = await Genero.find({estado})

        return res.json(generos)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const crearGenero = async (req = request, res = response) => {
    try {
        const body = req.body
        console.log(body)
        const genero = new Genero(body)

        await genero.save()
        return res.status(201).json(genero)

    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const actualizarGenero = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log(body)
        body.fechaActualizacion = new Date()
        const genero = await Genero.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(genero)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const borrarGenero = async (req = request, res = response) => { 
    try {
        const id = req.params.id
        await Genero.findByIdAndDelete(id)

        return res.status(204).json({ mensaje: "Genero borrado"})
    } catch (error) {
        return res.status(500).json({ mensaje: error})
    }
}

module.exports = {
    crearGenero, 
    consultarGenero,
    actualizarGenero, 
    borrarGenero
}