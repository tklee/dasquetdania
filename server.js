var http = require('http');
var fs = require('fs');
//var cp = require('child_process');
var url = require('url');
var express = require('express');
var bc = require('bitcoin');
var everyone = require('now');

var difftemp = 0;

bc.getDiffTest = function() {
  difftemp = bc.getDifficulty();

}

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
var db = require('./db');

var tempholder = db.getCustom('user1');

//var tempholder = db.fooname;
console.log(tempholder);
var testname = tempholder;
var accnumber = '82';
var testclanname = 'Wing Covenant';

//app.get('/usernames', function(req, res){
//  res.render('usernames', {
//    title: 'testname' 
//  });
//  //res.render('usernames');
//});

app.get('/' + testname, function(req, res){
  res.render('about', {
    username: testname,
    accountnumber: accnumber,
    clanname: testclanname
  });
});

//app.get('/friends.js', function(req, res){
//  fs.readFile(__dirname + 'friends.js', function(err, data) {
//    res.writeHead(200, {'Content-Type':'text/html'});
//    res.write(data);
//    res.end(); 
//
//
//
//  });
//  res.render('about', {
//    username: testname,
//    accountnumber: accnumber,
//    clanname: testclanname
//  });
//});

app.listen(8080);
//if (!module.parent) {
//  app.listen(process.env['app_port'] || 3000);
//}
//console.log('server started');
