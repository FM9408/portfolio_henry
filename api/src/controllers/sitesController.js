const { request, response } = require('express')
const { Site , Image} = require('../db')

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
        const allSites = await Site.findAll({include: Image})
        if (allSites.length === 0 || !allSites) {
            return res.status(404).send(emptyPage)
        }
        
        res.status(200).send(allSites)

    } catch (error) {
        res.status(500).json(errorMessage(error))
    }
}

async function addSite(req = request, res = response) {
    let { url, imageUrl, name } = req.body
    try {
        const [createdSite, isCreated] = await Site.findOrCreate({
            where: {
                url
            },
            defaults: {
                url,
                name
            },
            include: Image
        })
        console.log(isCreated)
        if (isCreated === false) {
            res.status(200).json({
                msg: 'El sitio ya fue creado',
                ...createdSite.dataValues
            })
        }
        else if (isCreated === true) {
            let createdImage = await createdSite.createImage({
                url: imageUrl,
            })
            await createdImage.setSite(createdSite)
            res.status(201).send(createdSite)
        }
    } catch (error) {
        res.status(500).send(errorMessage(error))
    }
}


module.exports = {
    getSites,
    addSite
}