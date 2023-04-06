const { DataTypes } = require('sequelize')
const {gunzipSync, gzipSync, unzipSync} = require('zlib')

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
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [60, 500]
            },
            get() {
                const rawData = this.getDataValue('description')
                const zippedBuffer = Buffer.from(rawData, 'base64')
                const unzippedBuffer = unzipSync(zippedBuffer)
                return unzippedBuffer.toString()
            },
            set(value) {
                const gzippedBuffer = gzipSync(value)
                this.setDataValue('description', gzippedBuffer.toString('base64'))
            }
        }
    },
        {
            timestamp: false,
            createdAt: false,
            updatedAt: false
    })
}