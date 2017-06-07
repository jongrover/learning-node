var http = require('http'),
    app = require('./app');

http.createServer(app.handleRequest).listen(8000);
