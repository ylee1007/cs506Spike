const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const auth = require('http-auth');

const { check, validationResult } = require('express-validator'); // check use has filled out both email and name

const router = express.Router();
const Registration = mongoose.model('Registration');

const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd'),
});

/*router.get('/', (req, res) => {
    // callback function
    res.render('form', {title: 'Registration form'});
});*/

router.get('/registrations', (req, res) => {
    Registration.find()
        .then((registrations) => {
            res.render('index', { title: 'Listing registrations', registrations });
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
});

router.post('/',
    [
        check('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        check('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email'),
        check('email')
            .isEmail()
            .withMessage('Please enter validate format of email'),
    ],(req, res) => {
    const errors = validationResult(req);
        if (errors.isEmpty()) {
            const registration = new Registration(req.body);
            registration.save()
                .then(() => { res.send('Thank you for your registration!'); })
                .catch((err) => {
                    console.log(err);
                    res.send('Sorry! Something went wrong.');
                });
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
    //console.log(req.body);
    //res.render('form', { title: 'Registration form' });
});


module.exports = router;