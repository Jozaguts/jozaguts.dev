import MailService from '../Services/MailService'
import sgMail from '@sendgrid/mail'

function MailController(req, res) {
  let {name, email, message} = req.body.data;

  if (req.isRecaptchaValidate) {
    const Mailer = new MailService(sgMail, process.env.SENDGRID_API_KEY);

    Mailer.send(name, email, message)

    res.json('success')
  } else {
    console.log('no paso')
  }
}

module.exports = MailController
