var express = require('express'),
    router  = new express.Router();

// Require controllers.
var splashController = require('../controllers/splash');
var tLapseController = require('../controllers/time_lapses');

// root path:
router.get('/', splashController.welcome);

// tLapse resource paths:
router.get('/timelapse',     tLapseController.index);
router.get('/timelapse/:id', tLapseController.show);

module.exports = router;
