const Router = require('express')
const {getSites, addSite} = require('../controllers/sitesController')

const sitesRouter = Router()

sitesRouter.get('/all', getSites)
sitesRouter.post('/add', addSite)



module.exports = sitesRouter