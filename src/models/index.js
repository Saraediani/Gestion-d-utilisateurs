// import 'dotenv/config';
const Sequelize = require('sequelize');
const User = require('./user');
const Departement = require('./departement');

const db = new Sequelize(`gestion d'utilisateurs`, `root`, ``, {
    host: "127.0.0.1",
    dialect: "mysql"
});

const models = {};
models.users = User(db)
models.departements = Departement(db)

models.users.belongsTo(models.departements);
db.sync({ force: false });
module.exports = models