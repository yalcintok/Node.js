const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random')
 .then(res => res.json())
 .then(data => {
    console.log(data.value.joke)
  })
 .catch(console.error)