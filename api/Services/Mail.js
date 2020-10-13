const express = require('express');
const app = express();
const ejs = require("ejs");
const path = require("path");
app.set('view engine', 'ejs');

export default class Mail {
  constructor(mailerProvider, key) {
    this.key = key;
    this.mailerProvider = mailerProvider;
    this.init();
  }

  init() {
    this.mailerProvider.setApiKey(this.key);
  }

  async send(name, email, message) {
    try {
      const messageFromContactForm = this.messageFromContactForm(name, message);
      const replyMessageToUser = await this.replyMessageToUser(name, email);
      await (this.mailerProvider.send(messageFromContactForm))
      await (this.mailerProvider.send(replyMessageToUser))
    } catch (e) {
      console.log(e)
    }

  }

  async renderEmail(name) {
    let template = {};
    try {
      template = await (ejs.renderFile(path.join(__dirname, '../views/Thanks.ejs'), {name: name})
        .then(result => result))
    } catch (error) {
      console.log(error)
    }
    return template
  }

  // change to private when # hash prefix  its support 
  async replyMessageToUser(name, email) {
    let templateEmail
    try {
      templateEmail = await (this.renderEmail(name))
    } catch (error) {
      console.log(error)
    } finally {
      return {
        to: `${email}`,
        from: 'contact@jozaguts.dev',
        reply: 'contact@jozaguts.dev',
        subject: 'Hello, Jozaguts.dev say Thanks',
        html: templateEmail
      }
    }


  }

  messageFromContactForm(name, message) {
    return {
      to: 'jozaguts@gmail.com',
      from: 'contact@jozaguts.dev',
      reply: 'contact@jozaguts.dev',
      subject: 'Message from Contact Form',
      html: `<h1>${name} <span> says:</span></h1> <br> <p>${message}</p>`,
    };
  }

}
