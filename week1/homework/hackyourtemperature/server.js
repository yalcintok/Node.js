const express = require('express'); // Also install and load axios and express express-handlebars. But not used yet!! 

const app = express()
 
app.get('/', function (req, res) {
  res.send('hello from backend to frontend!')
})
 
app.listen(3000);