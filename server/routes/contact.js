/*
File name : contact.js
Description : This file is made as a part of Lab 5
Student's name : Karandeep
StudentID : 100734535
Student's name : Ritu Patel
StudentID : 100730021
Student's name : Harmanpreet Kaur
StudentID : 100734511
Date : 2020-04-16
*/

let express = require('express');
let router = express.Router();

let passport = require('passport');

// connect the contactsController
let contactController = require('../controllers/contact');

// local authentication function

function requireAuth(req, res, next) 
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET Contact List page - READ Operation */
router.get('/', requireAuth, contactController.displayContactList);

/* GET Route to display the Add page */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route to process the Add page */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route to display the Edit page */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route to process the Edit page */
router.post('/edit/:id', requireAuth, contactController.processEditPage);


/* GET request to perform the delete action */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;