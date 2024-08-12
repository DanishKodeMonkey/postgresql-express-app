const { body, validationResult } = require('express-validator');

const alphaErr = 'Must only contain letters';
const lengthErr = 'Must be be between 1 and 10 letters';
const emailErr = 'Must be an email';

const validateUser = [
    // validation block
    body('username')
        .trim()
        .isAlpha()
        .withMessage(`Username ${alphaErr}`)
        .isLength({ min: 1, max: 10 })
        .withMessage(`username ${lengthErr}`),
    body('firstName')
        .trim()
        .isAlpha()
        .withMessage(`First name ${alphaErr}`)
        .isLength({ min: 1, max: 10 })
        .withMessage(`First name ${lengthErr}`),
    body('lastName')
        .trim()
        .isAlpha()
        .withMessage(`Last name ${alphaErr}`)
        .isLength({ min: 1, max: 10 })
        .withMessage(`Last name ${lengthErr}`),
    body('email').trim().isEmail().withMessage(`Email ${emailErr}`),
];

exports.usersListGet = (req, res) => {
    console.log('List of users will be displayed here - WIP');
};

exports.usersCreateGet = (req, res) => {
    res.render('createUser', { title: 'Create user' });
};

exports.usersCreatePost = [
    validateUser,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('createUser', {
                title: 'Create user',
                errors: errors.array(),
            });
        }
        const { username } = req.body;
        console.log('User to be created', username);
        res.redirect('/');
    },
];
