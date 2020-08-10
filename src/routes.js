const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users/index', UserController.index);
routes.post('/users/create', UserController.create);
routes.put('/users/update/:id', UserController.update);
routes.delete('/users/delete/:id', UserController.delete);

module.exports = routes;