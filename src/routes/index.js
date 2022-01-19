const usersRouter = require('./users');
const departementsRouter = require('./deparetement');

const routes = {};

routes.usersRouter = usersRouter;
routes.departementsRouter = departementsRouter;

module.exports = routes