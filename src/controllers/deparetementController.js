const models = require('../models/index');
const getDeparetements = async(req, res) => {
    try {
        const deparetements = await models.deparetements.findAll();
        const users = await models.users.findAll({
            include: [models.departements],
        });
        return res.status(200).render('home', {
            deparetements,
            users
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const getDeparetement = async(req, res) => {
    const deparetements = await models.deparetements.findAll();

    try {
        const deparetements = await models.deparetements.findByPk(req.params.id, {});
        if (deparetements === null) {
            return res.redirect('/user');
        }
        return res.status(200).render('updateDeparetement', {
            deparetements,
            users,
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};



const createDeparetement = async(req, res) => {
    const { name, Description } = req.body;

    console.log(req.body);
    try {
        const test = await models.departements.create({ name, Description });
        if (test) return res.status(200).redirect('/user');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteDeparetement = async(req, res) => {
    try {
        await models.Deparetements.destroy({ where: { id: req.params.id } });
        return res.status(200).redirect('/user');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const updateDeparetement = async(req, res) => {
    const { name, email, password, idDep } = req.body;
    try {
        await models.Deparetements.update({ name, email, password, idDep },

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
    getDeparetements,
    getDeparetement,
    createDeparetement,
    deleteDeparetement,
    updateDeparetement
}