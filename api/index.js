require('dotenv').config()
const server = require('./src/app')
const port = process.env.PORT || 3001
const { conn } = require('./src/db')

server.listen(port, async() => {
   try {
      await conn.sync({force: true, alter: true})
      console.log(`Servidor levantado y escuchando en el puerto ${port}`)
   } catch (error) {
      console.log(error)
   }
})
