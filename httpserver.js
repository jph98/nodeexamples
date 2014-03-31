#!/usr/bin/env node

var http = require("http");
var port = 8000;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(port);

console.log("Started server on port " + port);
