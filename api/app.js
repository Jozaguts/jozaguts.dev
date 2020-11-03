const express = require('express')
const app = express()
const cors = require('cors');
const path = require("path");
app.use(express.json())
app.use(express.urlencoded({extend: true}))
app.use(cors());

app.use(require('./routes/index.js'));

module.exports = {
  path: '/api',
  handler: app
}
