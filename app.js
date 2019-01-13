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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4001;
}

app.listen(port);