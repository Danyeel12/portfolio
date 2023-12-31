/*
//NAME: DANIEL MIRANDA
//STUDENT ID: 301249991
//DATE: JUNE 6, 2023
*/

var express = require('express');
var router = express.Router();
let indexController = require('../controller/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home',
                        userName: req.user ? req.user.username : ''  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});

/* GET a1 page. */
router.get('/a1', function(req, res, next) {
  res.render('a1', { title: 'a1' });
});


/* GET a4 page. */
router.get('/a4', function(req, res, next) {
  res.render('a4', { title: 'a4' });
});

/* GET a5 page. */
router.get('/a5', function(req, res, next) {
  res.render('a5', { title: 'a5' });
});

/* GET a6 page. */
router.get('/a6', function(req, res, next) {
  res.render('a6', { title: 'a6' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

//try and make logout function work
router.get('/', indexController.home);

module.exports = router;