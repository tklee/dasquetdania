var http = require('http');
var fs = require('fs');
//var cp = require('child_process');
var url = require('url');


function onRequest(req, res) { 
  var pathname = url.parse(req.url).pathname;
  //console.log("new connection");
  console.log('this coming should be the pathname --->');
  console.log(pathname);
  console.log('.......this is the end of block.........');  
  if (pathname == '/') {
//    console.log('***************' + pathname + '  should equal /home'); 
    fs.readFile(__dirname + '/files/user1.html', function(err, data){
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
  
    });

  }
//  else{
//    
////    console.log('***************' + pathname + '  should not equal /home'); 
//    fs.readFile(__dirname + '/files/createaccount.html', function(err, data){
//      res.writeHead(200, {'Content-Type':'text/html'});
//      res.write(data);
//      res.end();
//  
//    });
//  }

  if (pathname == '/createaccount') {
    fs.readFile(__dirname + '/files/createaccount.html', function(err, data) { 
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();

    });
  }
  if (pathname == '/user' /*regexStringsNumbers*/) {
    fs.readFile(__dirname + '/files/user1.html', function(err, data) { 
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }

  else{

    fs.readFile(__dirname + '/files/notfound.html', function(err, data) { 
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }

}


//server = http.createServer(onRequest); 
//  fs.readFile(__dirname + '/files/index.html', function(err, data){
//    res.writeHead(200, {'Content-Type':'text/html'});
//    res.write(data);
//    res.end();
//
//
//  });


http.createServer(onRequest).listen(process.env['app_port'] || 3000);

//console.log('server started');
