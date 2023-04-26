const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('user', {
        uid: {
            type: DataTypes.TEXT,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fullName: {
            type: DataTypes.VIRTUAL,
            get() {
                if (this.firstName && this.lastName) {
                    return `${this.firstName} ${this.lastName}`
                }
                else {
                    return 'No name'
                }
            }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isBan: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        
    },
        {
            timestamp: true,
            paranoid: true,
            createdAt: 'unitedAt',
            updatedAt: 'modifyAt'
    })
}