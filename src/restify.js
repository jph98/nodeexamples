#!/usr/bin/env node

var restify = require('restify');
var port = 8000;

var server = restify.createServer();

server.get('/sayhello/:name', function respond(req, res, next) {
  res.send('say hello via get ' + req.params.name);
  next();
});

server.head('/sayhello/:name', function respond(req, res, next) {
  res.send('say hello via head ' + req.params.name);
  next();
});

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});

console.log("Listening on port " + port);