const express = require ('express')
const {ConectionMongo} = require('./database/config')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()

ConectionMongo()

app.use(
    cors({
    origin: '*'})
)

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const generos = require('./routes/generoRoute')
const directores = require('./routes/directorRoute')
const productoras = require('./routes/productoraRoute')
const tipos = require('./routes/tipoRoute')
const medias = require('./routes/mediaRoute')

app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tipos', tipos)
app.use('/api/v1/medias', medias)

app.get("*", (req, res) => {
    return res.status(404).json({
        menssage: 'No encontrado',
        status: 404
    })
})

module.exports = app