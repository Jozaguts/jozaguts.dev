const express = require('express')
const app = express()
const cors = require('cors');
const path = require("path");
app.use(express.json())
app.use(express.urlencoded({extend: true}))
app.use(cors());

app.use( require(path.join(__dirname, '/routes')));

module.exports = {
  path: '/api',
  handler: app
}
