const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const key = require('./sources/keys.json')

const PORT = process.env.PORT || 3000;

const app = express()

//Handlebars Middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

//Body Static Folder
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Index Route
app.get('/', (req, res) => {
  res.render('index');
});  


//Weather Route
app.post('/weather', (req, res) => {
  let cityName = req.body.cityName;
  axios(`https://api.openweathermap.org/data/2.5/weather?APPID=${key.apiKey}&q=${cityName}&units=metric`)
   .then(resp => {
     res.render('index', {weatherText: `${resp.data.name}: ${resp.data.main.temp}`})
   })
   .catch(() => {
     res.render('index', {weatherText: 'City is not found.'})
   });
})
 
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
}); 