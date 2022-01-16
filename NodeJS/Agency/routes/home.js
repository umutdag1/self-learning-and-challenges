const express = require('express');
const router = express.Router();

const {homeView} = require('../controllers/homeController');

router.get('/home', homeView);

module.exports = router;
