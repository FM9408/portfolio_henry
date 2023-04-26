const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('visits', {
        visits: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    })
}