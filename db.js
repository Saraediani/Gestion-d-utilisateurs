const Sequelize = require('sequelize');
const db = new Sequelize(`gestion d'utilisateurs`, `root`, ``, {
    host: "127.0.0.1",
    dialect: "mysql"
});
module.exports = db;