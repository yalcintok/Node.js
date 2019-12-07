const fetch = require('node-fetch');

fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', { headers: { 'Authorization': `Basic ${Buffer.from('admin:hvgX8KlVEa').toString('base64')}`}}) 
 .then(res => res.json())
 .then(data => {
    console.log(data)
  })
 .catch(console.error)