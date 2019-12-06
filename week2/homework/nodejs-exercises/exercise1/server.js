const express = require('express');
const fs = require("fs");
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
 

app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok');
});




app.put('/blogs', (req, res) => {
  if (fs.existsSync('MyFirstBlog.json')) {
    fs.writeFileSync('MyFirstBlog.json', '{ "title": "My first blog. Added new things ", "content": "Lorem ipsum" }');
    res.end('ok')
  }
  else {
    res.end('post does not exist');
  }
});

app.delete('/blogs/:title', (req, res) => {
  fs.unlinkSync('MyFirstBlog.json');
  res.end('ok');
});

app.get('/blogs/:title', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'MyFirstBlog.json'));
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
});