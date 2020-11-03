const express = require('express');
const router = express.Router();

router.use('/send-message', require('./mail'));
router.use('/resume', require('./resume'))

module.exports = router;
