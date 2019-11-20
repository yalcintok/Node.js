const http = require('http');

//create a server
let server = http.createServer(function(request, response) {
  if ( request.url === '/script.js' ) { 
    /* send javascript */
    response.setHeader('Content-Type', 'text/javascript');
    response.write(`document
    .getElementById('content')
    .appendChild(document.createTextNode('Welcome to Server-land!'));`)
   } 
   else if (request.url === '/style.css') {
    response.setHeader('Content-Type', 'text/stylesheet');
    response.write(`
      #content { color: blue }
    `)
   } 
   else {
      /* send HTML */ 
      response.setHeader('Content-Type', 'text/html');
      response.write(`<html>
      <head>
        <title>My First Web Server</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
      <body>
        <h1>Hello, anyone there?</h1>
        <div id="content"></div>
        <script src="script.js"></script>
      </body>
    </html>`); //send a response back to the client
    }
 
  response.end(); //end the response
});

server.listen(3000, () => {
  console.log(`Starting the server`)
}); //the server listens on port 3000