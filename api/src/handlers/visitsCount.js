const { Visits } = require('../db')



async function counter() {
    try {
        const count = await Visits.findAll()
        if (count.length === 0) {
            const created = await Visits.create()
            console.log(created.visits)
        } else {
            const incr =await Visits.increment({ visits: 1 }, {
                where: {
                    
                }
            })
            return incr[0][0].visits
        }
    } catch (error) {
        throw new Error(error)
    }
}





const index = {
    counter: counter
}



module.exports = index