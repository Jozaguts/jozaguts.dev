require('dotenv').config()
const secret = process.env.CAPTCHA_KEY
const fetch = require('node-fetch');

function recaptchaValidator(req, res, next) {

  fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'post',
    body: `secret=${secret}&response=${req.body.token}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
  })
    .then(res => res.json())
    .then((json) => {
      req.isRecaptchaValidate = (json.success && json.score > 0.5);
      next();
    });

}

module.exports = recaptchaValidator
