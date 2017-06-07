var http = require('http'),
    fs = require('fs');

function onRequest(request, response) {
  fs.readFile('./index.html', null, function (err, data) {
    if (err) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write('File not found.');
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
    }
    response.end();
  });
}

http.createServer(onRequest).listen(8000);
