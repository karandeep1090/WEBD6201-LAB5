/*
File name : index.js
Student's name : Karandeep
StudentID : 100734535
Student's name : Ritu Patel
StudentID : 100730021
Student's name : Harmanpreet Kaur
StudentID : 100734511
Date : 2020-04-06
*/

let express = require('express');
let router = express.Router();

let controllers = require('../controllers/index');

/* ROUTES SECTION */

/* GET home page. */
router.get('/', (req, res, next) => {
  controllers.displayHome(res);
});

router.get('/home', (req, res, next) => {
  controllers.displayHome(res);
});

/* GET project page */
router.get('/projects', (req, res, next) => {
  controllers.displayProjects(res);
});

/* GET about page */
router.get('/about', (req, res, next) =>
  {
    controllers.displayAbout(res);
});

/* GET contact page */
router.get('/contact', (req, res, next) =>
  {
    controllers.displayContact(res);
});

/* GET products page */
router.get('/products', (req, res, next) =>
  {
    controllers.displayProducts(res);
});

/* GET services page */
router.get('/services', (req, res, next) =>
  {
    controllers.displayServices(res);
});

/* GET login page */
router.get('/login', (req, res, next) =>
  {
    controllers.displayLogin(res);
});



module.exports = router;
