const { Router } = require('express');
const usersController = require('../controller/userController');
const usersRouter = Router();

/* list */
usersRouter.get('/', usersController.usersListGet);

/* create */
usersRouter.get('/new', usersController.usersCreateGet);
usersRouter.post('/new', usersController.usersCreatePost);

/* search */
usersRouter.get('/search', usersController.usersSearchGet);

/* delete ALL */
usersRouter.get('/delete', usersController.usersDeleteGet);
module.exports = usersRouter;
