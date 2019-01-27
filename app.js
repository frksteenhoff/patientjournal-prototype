'use strict';

let express = require('express');
var http = require('http');
var path = require('path');
var app = express();
let server = http.createServer(app);

app.use(express.static(path.join(__dirname))); 

app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start node server
app.listen( process.env.PORT || 3000, function() {
  console.log( 'Node server is running');
  });