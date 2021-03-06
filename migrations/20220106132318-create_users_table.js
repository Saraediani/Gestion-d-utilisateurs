'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            idDep: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.dropTable('users');
    }
};