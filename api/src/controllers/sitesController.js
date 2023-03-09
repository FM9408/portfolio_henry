const { request, response } = require('express')
const {EmptyResultError} = require('sequelize')
const { Site } = require('../db')

const errorMessage = (error) => {
    return {
        err: 'Algo salió muy mal, por favor intentalo de nuevo más tarde',
        details: error
    }
        
}
const emptyPage = {
    err: 'La página que buscas está vacía'
    
}

async function getSites(req = request, res = response) {
    try {
        const allSites = await Site.findAll()
        if (allSites.length === 0 || !allSites) {
            return res.status(404).send(emptyPage)
        }
        
        res.status(200).send(allSites)

    } catch (error) {
        res.status(500).json(errorMessage(error))
    }
}


module.exports = {
    getSites
}