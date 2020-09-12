const express = require('express')
const app = express()
require('dotenv').config()

app.post('/send-message',(req, res) => {
  
  res.json('llego')
})

module.exports ={
  path:'/api',
  handler: app
}
