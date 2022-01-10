const Sequelize = require('sequelize');
const Departement = (sequelize) =>
    sequelize.define('departements', {

        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
    });
module.exports = Departement