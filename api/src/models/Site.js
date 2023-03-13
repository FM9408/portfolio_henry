const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('site', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.TEXT,
            validate: {
                isUrl: true
            }
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false
    })
}