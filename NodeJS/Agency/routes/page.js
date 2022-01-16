const express = require('express');
const router = express.Router();
const {aboutView, contactView, photoView} = require('../controllers/pageController');

router.get('/about', aboutView);
router.get('/contact', contactView);
router.get('/photo', photoView);

module.exports = router;
