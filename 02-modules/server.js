var http = require('http'),
    myModule = require('./myModule');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(myModule.myVa);
  response.end();
}

http.createServer(onRequest).listen(8000);
