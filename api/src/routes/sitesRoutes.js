const Router = require('express')
const {getSites} = require('../controllers/sitesController')

const sitesRouter = Router()

sitesRouter.get('/all', getSites)



module.exports = sitesRouter