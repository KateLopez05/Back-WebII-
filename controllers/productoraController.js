const Productoras = require('../models/productora')
const {request, response} = require('express')

const crearProductora= async (req = request, res = response) => {
    try {
        const body = req.body
        const productoraPrincipal = new Productoras(body)

        await Productoras.save()

        return res.status(201).json(productoraPrincipal)
    } catch (error) {
        return res.status(500).json({ mensaje : error })
    }
}

const consultarProductora = async(req = request, res = response) => {
    try {
        const { estado } = req.query
        const productoraPrincipal = await Productoras.find({estado})

        return res.json(productoraPrincipal)
    } catch (error) {
        return res.status(500).json({mensaje: error})
    }
}

const actualizarProductora = async(req = request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body
    
        body.fechaActualizacion = new Date()
        
        const productoras = await Productoras.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(productoras)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const borrarProductora = async(req= request, res= response) => {
    try {
        const id= req.params.id

        await Productoras.findByIdAndDelete(id)

        return res.status(204).json({ mensaje: "Productora borrada" })
    } catch (error) {
        return re.status(500).json({ mensaje: error})
    }
}

module.exports= {
    crearProductora, 
    consultarProductora, 
    actualizarProductora, 
    borrarProductora
}