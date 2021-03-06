const Sequelize = require('sequelize');
const User = (sequelize) =>
    sequelize.define('users', {
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
    });

// User.belongsTo(Departement)
module.exports = User