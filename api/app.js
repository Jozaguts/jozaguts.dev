const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({extend: true}))
app.use(cors());

app.use(require('./Routes/index.js'));

module.exports = {
  path: '/api',
  handler: app
}
