var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log(q.pathname);
  var pathnameLength = q.pathname.length;

  if( q.pathname === "/") {
    console.log("Red Crosse Knight")
    filename = "./index.html"
  }
  else if ( q.pathname === "") {
    console.log("Villain")
  }

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);
