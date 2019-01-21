'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/')); 

app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
console.log(process.env.PORT);	
app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });

http.createServer(app).listen(app.get('port') ,app.get('ip'), function(){
  console.log("yep", app.get('ip'), app.get('port'));
});