const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // название DB
    process.env.DB_USER, // имя пользователя
    process.env.DB_PASSWORD, // пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)