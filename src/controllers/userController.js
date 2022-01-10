const models = require('../models/index');
const getUsers = async(req, res) => {
    try {
        const users = await models.users.findAll({
            include: [models.departements],
        });
        return res.status(200).render('home', {
            users,
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getUser = async(req, res) => {
    console.log('all users');
}
const createUser = async(req, res) => {
    console.log('create users');
}
const deleteUser = async(req, res) => {
    console.log('delete user');
}



module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser
}