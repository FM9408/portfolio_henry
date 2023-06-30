require('dotenv').config()
const server = require('./src/app')
const {conn} = require('./src/db')
const serverConection = require('http').createServer(server);
const ioServer= require('socket.io').Server
const port = process.env.PORT || 3001
const io = new ioServer(serverConection, {
   cors: {
      origin: 'http://localhost:3000'
   }
})

require('./src/socket.js')(io)


serverConection.listen(port, () => {
   conn.sync({force: true, alter: false})
})




