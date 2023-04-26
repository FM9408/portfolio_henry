module.exports = (io) => {
    io.on('connection', socket => {
        socket.on('usuario-autentificado', (user) => {
            socket.join([user.uid, 'usuarios-online'])
            console.log(socket.rooms)
        })
        socket.on('disconnect', (reason) => {
            console.log(reason)
            console.log(socket.rooms)
            socket.leave('usuarios-online')
        })
        
    })
    
}