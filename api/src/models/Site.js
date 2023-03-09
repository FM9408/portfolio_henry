const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('site', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false
    })
}