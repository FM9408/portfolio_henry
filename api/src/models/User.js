const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('user', {
        uid: {
            type: DataTypes.TEXT,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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