#!/usr/bin/env node

var net = require('net');
var port = 8000;
 
net.createServer(
  function (stream) {
    stream.write('hello\r\n');
 
    stream.on('end',
      function () {
        stream.end('goodbye\r\n');
      }
    );
 
    stream.pipe(stream);
  }
).listen(port);

console.log("Created TCP server on port " + port);
