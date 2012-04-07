var http = require('http');
var fs = require('fs');
//var cp = require('child_process');
var url = require('url');
var express = require('express');


app = module.exports = express.createServer();

//var db = require('db');
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

//app.configure('production', function(){
//  app.use(express.errorHandler()); 
//});

// Routes


var testname = "testingname";
app.get('/usernames', function(req, res){
  res.render('usernames', {
    username: testingname
  });
});



if (!module.parent) {
  app.listen(process.env['app_port'] || 3000);
}
//console.log('server started');
