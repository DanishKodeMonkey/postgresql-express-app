const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

const alphaErr = 'Must only contain letters';
const lengthErr = 'Must be be between 1 and 10 letters';

const validateUser = [
    // validation block
    body('username')
        .trim()
        .isAlpha()
        .withMessage(`Username ${alphaErr}`)
        .isLength({ min: 1, max: 10 })
        .withMessage(`username ${lengthErr}`),
];

exports.usersListGet = asyncHandler(async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log('Usernames fetched: ', usernames);
    res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
});

exports.usersCreateGet = (req, res) => {
    res.render('createUser', { title: 'Create user' });
};

exports.usersCreatePost = [
    validateUser,
    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('createUser', {
                title: 'Create user',
                errors: errors.array(),
            });
        }
        const { username } = req.body;
        console.log('User to be created', username);
        await db.insertUsername(username);
        res.redirect('/');
    }),
];

exports.usersSearchGet = asyncHandler(async (req, res) => {
    const searchTerm = req.query.username.trim().toLowerCase();
    const results = await db.searchUsers(searchTerm);
    res.json(results);
});

exports.usersDeleteGet = asyncHandler(async (req, res) => {
    const results = await db.deleteUsernames();
    res.json(results);
});
