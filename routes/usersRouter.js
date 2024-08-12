const { Router } = require('express');
const usersController = require('../controller/userController');
const usersRouter = Router();

/* list */
usersRouter.get('/', usersController.usersListGet);

/* create */
usersRouter.get('/new', usersController.usersCreateGet);
usersRouter.post('/new', usersController.usersCreatePost);

module.exports = usersRouter;
