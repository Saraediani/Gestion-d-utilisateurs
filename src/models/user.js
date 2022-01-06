const Sequelize = require('sequelize');
const db = require('../../db');
module.exports = db.define('User', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    idDep: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },

})