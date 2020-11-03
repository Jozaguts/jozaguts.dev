const express = require('express');
const router = express.Router();
const recaptchaMiddleware = require('../Middleware/Recaptcha.js')
const ResumeController = require('../Controllers/ResumeController')

router.post('/', recaptchaMiddleware, ResumeController)


module.exports = router;
