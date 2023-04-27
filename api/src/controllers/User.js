const { User } = require('../db')

async function createUser(req, res) {
    const {firstName, lastName, email, } = req.body
    try {
        const getUser = await User.create({
            firstName,
            lastName,
            email
        })
        res.status(201).send(getUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createUser,
}