const express = require('express');
const router = express.Router();
const recaptchaMiddleware = require('../Middleware/Recaptcha.js')
const MailController = require('../Controllers/MailController')

router.post('/', recaptchaMiddleware, MailController)


module.exports = router;
