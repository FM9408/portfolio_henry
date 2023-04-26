const Router  = require('express')
const {createUser} = require('../controllers/User.js')

const userRoute = Router()
userRoute.post('/create', createUser)

module.exports = userRoute