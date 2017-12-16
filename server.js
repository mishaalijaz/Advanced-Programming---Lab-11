var net = require('net');
var http = require('http');
var fs = require("fs");

var server = net.createServer(function(socket){
  socket.write("Welcome Client!\r\n");
  socket.pipe(socket);
}).listen(8000);

var website_server = http.createServer(function(request, response){
  console.log(request.url + "made a request.\r\n");
  response.writeHead(200, {'Content-type':'text/html'});
  var readhtml = fs.createReadStream(__dirname + "/index.html", 'utf8');
  readhtml.pipe(response);
}).listen(8081, '127.0.0.1');
