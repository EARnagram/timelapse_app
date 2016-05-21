var express = require('express'),
    router  = new express.Router();

// Require controllers.
var splashController = require('../controllers/splash');
var tLapseController = require('../controllers/time_lapses');

// root path:
router.get('/', splashController.welcome);

// tLapse resource paths:
router.get('/timelapses',     tLapseController.index);
router.get('/timelapses/:id', tLapseController.show);

module.exports = router;
