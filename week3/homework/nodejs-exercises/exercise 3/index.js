const fetch = require('node-fetch');

fetch('https://reservation100-sandbox.mxapps.io/api/reservations', { 
  headers: { 
    "Content-Type" : "application/json"
  },
  method: "POST",
  body: JSON.stringify({name: "Brad Traversy", numberOfPeople: 3})
}) 
 .then(res => res.text())
 .then(data => {
    console.log(data)
  })
 .catch(console.error)