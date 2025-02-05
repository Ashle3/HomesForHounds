const routes = require('express').Router();
const controller = require('../controllers');

routes.get('/', controller.titleFunction);

routes.get('/small', controller.smallDogs);

routes.get('/large', controller.largeDogs);

module.exports = routes;