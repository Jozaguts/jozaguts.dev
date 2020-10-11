const fetch = require('node-fetch');
require('dotenv').config()
const secret = process.env.CAPTCHA_KEY;

function recaptchaValidator(token ) {
  console.log(token)
  console.log(secret)
  return fetch('https://www.google.com/recaptcha/api/siteverify', {

    method: 'post',
    body: `secret=${token}&response=${secret}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
  })
    .then((res) =>{
     return res.json() 
    })
    .then((json) => {
      console.log(json)
      return (json.success && json.score > 0.5) 
      
    })
    .catch(error => console.log(error))

}

module.exports = recaptchaValidator
