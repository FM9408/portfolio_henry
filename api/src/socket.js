module.exports = (io) => {
    io.on('connection', socket => {
        socket.join(['annonimuos-users', socket.id])
        io.to(socket.id).emit('succesfully-connection', socket.rooms)
        socket.on('usuario-autentificado', (user) => {
            socket.leave('annonimous-users')
            socket.join([user.uid, 'usuarios-online'])
            console.log(socket.rooms)
        })
        socket.on('disconnect', (reason) => {
            socket.leave('usuarios-online')
            socket.broadcast.emit('user-offline', socket.id );
        })
        
    })
    
}

