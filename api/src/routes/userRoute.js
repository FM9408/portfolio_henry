const Router  = require('express')
const {createUser, checkUserName} = require('../controllers/User.js')

const userRoute = Router()
userRoute.post('/create', createUser)
userRoute.get('/checkUser', checkUserName)

module.exports = userRoute