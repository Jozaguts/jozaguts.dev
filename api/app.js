const express = require('express')
const fetch = require('node-fetch');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extend: true}))
require('dotenv').config()

app.post('/send-message', (req, res) => {
  let secret = process.env.CAPTCHA_KEY;
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  if (isHuman(req.body.token, secret)) {
    let USER_NAME = req.body.data.name, MESSAGE = req.body.data.message
    USER_EMAIL = req.body.data.email
    let msg = {
      to: 'jozaguts@gmail.com',
      from: 'contact@jozaguts.dev',
      reply: 'contact@jozaguts.dev',
      subject: 'Message from Contact Form',
      html: `<h1>${USER_NAME} <span> says:</span></h1> <br> <p>${MESSAGE}</p>`,
    };
    const responseMessage = {
      to: USER_EMAIL,
      from: 'contact@jozaguts.dev',
      reply: 'contact@jozaguts.dev',
      subject: 'Message was send successfully',
      text: `${USER_NAME} Gracias por comunicarte, intentaremos respondete lo antes posible`,
      html: '<table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana; min-width: 450px;"><tbody><tr style="text-align: center;"><td><h3 color="#000000" class="sc-fBuWsC eeihxG" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);"><span>Sagit </span><span>&nbsp;</span><span>Gutiérrez</span></h3><p color="#000000" font-size="medium" class="sc-fMiknA bxZCMx" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Web Developer</span></p><p color="#000000" font-size="medium" class="sc-dVhcbM fghLuF" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>IT</span><span>&nbsp;|&nbsp;</span><span>Jozaguts</span></p></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana; width: 100%;"><tbody><tr><td height="30"></td></tr><tr><td color="#5e8cc2" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ" style="width: 100%; border-bottom: 1px solid rgb(94, 140, 194); border-left: none; display: block;"></td></tr><tr><td height="30"></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana; width: 100%;"><tbody><tr style="vertical-align: middle;"><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana;"><tbody><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana;"><tbody><tr><td style="vertical-align: bottom;"><span color="#5e8cc2" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(94, 140, 194);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#5e8cc2" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(94, 140, 194);"></span></td></tr></tbody></table></td><td style="padding: 0px; color: rgb(0, 0, 0);"><a href="tel:322 239 7179" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>322 239 7179</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana;"><tbody><tr><td style="vertical-align: bottom;"><span color="#5e8cc2" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(94, 140, 194);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#5e8cc2" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(94, 140, 194);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="mailto:Contact@Jozaguts.dev" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>Contact@Jozaguts.dev</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana;"><tbody><tr><td style="vertical-align: bottom;"><span color="#5e8cc2" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(94, 140, 194);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#5e8cc2" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(94, 140, 194);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="//Jozaguts.dev" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>Jozaguts.dev</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana;"><tbody><tr><td style="vertical-align: bottom;"><span color="#5e8cc2" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(94, 140, 194);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="#5e8cc2" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(94, 140, 194);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><span color="#000000" class="sc-csuQGl CQhxV" style="font-size: 12px; color: rgb(0, 0, 0);"><span>Puerto Vallarta, Jal Méx.</span></span></td></tr></tbody></table></td><td width="15"><div></div></td><td style="text-align: right;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana; width: 100%;"><tbody><tr><td><img src="https://secure.gravatar.com/userimage/192748871/7d4456bcab6586506b3a57e493173a40" role="presentation" width="130" class="sc-cHGsZl bHiaRe" style="max-width: 130px; display: inline-block;"></td></tr><tr><td height="10"></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana; display: inline-block;"><tbody><tr style="text-align: right;"><td><a href="https://www.facebook.com/JozagutsDev/" color="#295f91" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(41, 95, 145);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#295f91" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(41, 95, 145); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="https://twitter.com/jozaguts" color="#295f91" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(41, 95, 145);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#295f91" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(41, 95, 145); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="https://www.linkedin.com/in/jozaguts/" color="#295f91" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(41, 95, 145);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#295f91" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(41, 95, 145); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="https://www.instagram.com/jozagutsdev/" color="#295f91" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(41, 95, 145);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#295f91" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(41, 95, 145); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Verdana; width: 100%;"><tbody><tr><td height="30"></td></tr><tr><td color="#5e8cc2" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ" style="width: 100%; border-bottom: 1px solid rgb(94, 140, 194); border-left: none; display: block;"></td></tr><tr><td height="30"></td></tr></tbody></table></td></tr></tbody></table>'
    };

    sgMail.send(msg)
      .then((response) => {
        console.log('send first')
      })
      .then(response=>{
        console.log('send second')
        sgMail.send(responseMessage)
          .then((response) => {
           console.log('message was send successfully')
          })
      })
      .catch(error => console.log(error))
    res.json('message was send successfully')

  } else {
    return;
  }


})

function isHuman(token, secret) {
  return fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'post',
    body: `secret=${secret}&response=${token}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
  })
    .then(res => res.json())
    .then((json) => {
      return (json.success && json.score > 0.5)
    });

}

module.exports = {
  path: '/api',
  handler: app
}
