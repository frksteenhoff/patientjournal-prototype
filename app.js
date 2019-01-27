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
const PORT = process.env.PORT || 3000;
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
console.log(process.env.PORT, " ", PORT);	
app.set( 'PORT', PORT);

// Start node server
app.listen( PORT, function() {
  console.log( 'Node server is running on port ${PORT}');
  });