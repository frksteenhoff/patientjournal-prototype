'use strict';

let express = require('express');
var http = require('http');
var path = require('path');
var app = express();
let server = http.createServer(app);
console.log(__dirname);
app.use(express.static(path.join(__dirname + ''))); 
app.use(express.static(path.join(__dirname + '/assets'))); 
app.use(express.static(path.join(__dirname + '/src'))); 
app.use(express.static(path.join(__dirname + '/fonts'))); 
app.use(express.static(path.join(__dirname + '/dist'))); 
app.use(express.static(path.join(__dirname))); 

app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start node server
app.listen( process.env.PORT || 3000, function() {
  console.log( 'Node server is running');
  });