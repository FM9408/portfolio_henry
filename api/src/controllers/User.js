const { User } = require('../db')

async function createUser(req, res) {
    const { firstName, displayName, lastName, email, uid, isAdmin } = req.body
    console.log(req.body)
    try {
        const getUser = await User.create({
            firstName,
            lastName,
            email,
            uid,
            isAdmin,
            displayName
        })
        res.status(201).send(getUser)
    } catch (error) {
        console.log(Object.assign({}, error))
        res.status(500).send(error)
    }
}
async function checkUserName(req, res) {
    const { displayName } = req.query
    try {
        const checkUserName = await User.findAll({
            where: {
                displayName
            },
            attributes: ['displayName']
        })
        res.status(200).send(checkUserName)
    } catch (error) {
        console.log(Object.assign({}, error))
    }
}

module.exports = {
    createUser,
    checkUserName
}