var http = require('http');
http.createServer(function(req, res) {
  res.write("yaşıyom");
  res.end();
}).listen(3000);
