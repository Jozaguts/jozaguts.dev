const express = require('express');
const router = express.Router();

router.use('/send-message', require('./mail'));


module.exports = router;
