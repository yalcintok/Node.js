const express = require('express');
const exphbs = require('express-handlebars');

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
  res.send(cityName);
})
 
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
}); 