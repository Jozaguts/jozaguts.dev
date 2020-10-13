const express = require('express')
const app = express()
const cors = require('cors');
const recaptchaMiddleware = require('./Middleware/Recaptcha.js')
const MailController = require('./Controllers/MailController')
app.use(express.json())
app.use(express.urlencoded({extend: true}))
app.use(cors());


app.use('/send-message', recaptchaMiddleware, MailController);

module.exports = {
  path: '/api',
  handler: app
}
