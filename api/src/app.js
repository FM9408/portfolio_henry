const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')




const server = express()
server.name = 'portfolio api'
server.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
server.use(bodyParser.json({limit: '50mb'}))
server.use(cookieParser())
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Accsess-Control-Allow-Origin', process.env.NODE_ENV === 'production' ? process.env.ORIGIN_URL : '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control--Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT, OPTIONS")
    next()
});



server.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || err)
    next()
})


module.exports = server
