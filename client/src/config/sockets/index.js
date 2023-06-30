import {io} from 'socket.io-client'
const {NODE_ENV, BASE_URL} = process.env

export const ioConn = io(NODE_ENV === 'production' ? BASE_URL : 'http://localhost:3001', {
    autoConnect: true,
    
    
   
})



export function socketConnection(user) {
   
}

export function socketDisconnection() {
    ioConn.disconnect()
}


ioConn.on('user-offline', (userId) => {
    console.log(userId)
} )