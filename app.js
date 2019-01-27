'use strict';

let express = require('express');
var http = require('http');
var path = require('path');
var app = express();
let server = http.createServer(app);

app.use(express.static(path.join(__dirname))); 

app.get('/', function(req, res, next) {
  res.sendStatus(200);
});

app.get('/index.html', function(req, res, next){
    res.sendFile(path.join(__dirname+"/index.html"));
});

const PORT = process.env.PORT || 3000;
console.log(process.env.PORT, " ", PORT);	

// Start node server
app.listen( PORT, function() {
  console.log( 'Node server is running on port ' + PORT);
  });