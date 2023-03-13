const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('image', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
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