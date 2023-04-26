const Router = require('express')
const sitesRouter = require('./sitesRoutes')
const userRouter = require('./userRoute')

const mainRouter = Router()

mainRouter.use('/sites', sitesRouter)
mainRouter.use('/user', userRouter)


module.exports = mainRouter