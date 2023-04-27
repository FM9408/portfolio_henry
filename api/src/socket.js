module.exports = (io) => {
    io.on('connection', socket => {
        socket.on('usuario-autentificado', (user) => {
            socket.join([user.uid, 'usuarios-online'])
        })
        socket.on('disconnect', (reason) => {
            
            socket.leave('usuarios-online')
        })
        
    })
    
}