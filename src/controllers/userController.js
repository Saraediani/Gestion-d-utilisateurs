const models = require('../models/index');
const getUsers = async(req, res) => {
    try {
        const departements = await models.departements.findAll();
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
    const departements = await models.departements.findAll();

    try {
        const user = await models.users.findByPk(req.params.id, {
            include: [models.departements],
        });
        if (user === null) {
            return res.redirect('/user');
        }
        return res.status(200).render('updateUser', {
            user,
            departements,
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const formeUser = async(req, res) => {
    try {
        const departements = await models.departements.findAll();
        return res.status(200).render('createUser', {
            departements,
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};



const createUser = async(req, res) => {
    const { name, email, password, departementId } = req.body;

    console.log(req.body);
    try {
        const test = await models.users.create({ name, email, password, departementId });
        if (test) return res.status(200).redirect('/user');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteUser = async(req, res) => {
    try {
        await models.users.destroy({ where: { id: req.params.id } });
        return res.status(200).redirect('/user');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const updateUser = async(req, res) => {
    const { name, email, password, departementId } = req.body;
    try {
        await models.users.update({ name, email, password, departementId },

            {
                where: {
                    id: req.params.id,
                },
            }
        );
        return res.status(200).redirect('/user');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    formeUser,
    updateUser
}