//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello New York\n');
//}).listen(3001);
//console.log('Server running at http://localhost:3001/');

//====================
//var express = require('express');
//var app = express();
//app.get('/', function(req, res) {
//  res.send('Hello Seattle\n');
//});
//app.listen(3001);
//console.log('Listening on port 3001...');

//==================
//var express = require('express');

//var app = express();

//require('./routes')(app);

//app.listen(3001);
//console.log("Jammin\' on port 3001...");

//======================
var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost:27017/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

//app.configure(function(){
//  app.use(express.bodyParser());
//});

require('./models/musician');
require('./routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');