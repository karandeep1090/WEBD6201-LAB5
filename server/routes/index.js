let express = require('express');
let router = express.Router();

let controllers = require('../controllers/index');

/* ROUTES SECTION */

/* GET home page. */
router.get('/', (req, res, next) => {
  controllers.displayHome(req, res, next);
});

router.get('/home', (req, res, next) => {
  controllers.displayHome(req, res, next);
});

/* GET project page */
router.get('/projects', (req, res, next) => 
{
  controllers.displayProjects(req, res, next);
});

/* GET about page */
router.get('/about', (req, res, next) =>
  {
    controllers.displayAbout(req, res, next);
});

/* GET contact page */
router.get('/contact', (req, res, next) =>
  {
    controllers.displayContact(req, res, next);
});

/* GET products page */
router.get('/products', (req, res, next) =>
  {
    controllers.displayProducts(req, res, next);
});

/* GET services page */
router.get('/services', (req, res, next) =>
  {
    controllers.displayServices(req, res, next);
});

/* GET display login page */
router.get('/login', (req, res, next) =>
  {
    controllers.displayLogin(req, res, next);
});

/* POST process the login page */
router.post('/login', (req, res, next) =>
{
  controllers.processLoginPage(req, res, next);
});

/* GET display register page */
router.get('/register', (req, res, next) => {
  controllers.displayRegisterPage(req, res, next);
});

/* POST process the register page */
router.post('/register', (req, res, next) => {
  controllers.processRegisterPage(req, res, next);
});

/* GET perform logout */
router.get('/logout', (req, res, next) => {
  controllers.performLogout(req, res, next);
});


module.exports = router;
