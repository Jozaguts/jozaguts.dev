const express = require('express');
const router = express.Router();
const recaptcha = require('../middleware/index.js');

router.post('/', recaptcha)


module.exports = router;
