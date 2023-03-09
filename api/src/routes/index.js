const Router = require('express')
const sitesRouter = require('./sitesRoutes')

const mainRouter = Router()

mainRouter.use('/sites', sitesRouter)


module.exports = mainRouter