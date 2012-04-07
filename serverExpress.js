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
    fs.readFile(__dirname + '/files/index.html', function(err, data){
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


var exp = require('express');

app = module.exports = express.createServer();

var db = require('db');
//might have to do
//var db = require('/files/db') depending on nodester





app.configure(function(){
  app.set('views', __dirname + '/files/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes



app.get('/username', function(req, res){
  res.render('/files/views/username', {
    username: db.username
  });
});




  var username = "user1";
  if (pathname == '/createaccount') {
    fs.readFile(__dirname + '/files/createaccount.html', function(err, data) { 
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();

    });
  }
  if (pathname == '/' + username /*regexStringsNumbers*/) {
    fs.readFile(__dirname + '/files/' + username + '.html', function(err, data) { 
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }

  if (pathname == '/bbtest' /*regexStringsNumbers*/) {
    fs.readFile(__dirname + '/files/bbtest.html', function(err, data) { 
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
