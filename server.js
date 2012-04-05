var http = require('http');
var fs = require('fs');


function onRequest(req, res) { 
  var pathname = url.parse(req.url).pathname;
  //console.log("new connection");
  if (pathname = '/home') {
    
    fs.readFile(__dirname + '/files/index.html', function(err, data){
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
  
    });
  }

//  if (pathname = '/createaccount') {
//    fs.readFile(__dirname + '/files/createaccount.html', function(err, data) { 
//      res.writeHead(200, {'Content-Type':'text/html'});
//      res.write(data);
//      res.end();
//
//    });
//  }
//  if (pathname = '/user' /*regexStringsNumbers*/) {
//    fs.readFile(__dirname + '/files/user1.html', function(err, data) { 
//      res.writeHead(200, {'Content-Type':'text/html'});
//      res.write(data);
//      res.end();
//    });
}


server = http.createServer(onRequest); 
//  fs.readFile(__dirname + '/files/index.html', function(err, data){
//    res.writeHead(200, {'Content-Type':'text/html'});
//    res.write(data);
//    res.end();
//
//
//  });


server.listen(process.env['app_port'] || 3000);

//console.log('server started');
