const express = require('express');
const index = express.Router();
const recaptcha = require('../Middleware/Recaptcha.js');

index.post('/', recaptcha)


module.exports = index;
