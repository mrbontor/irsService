var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('superagent');
var redis = require('redis');

app.use(bodyParser.json())


require('./app/route/transaksiDetail.route.js')(app);

// Create a Server
var server = app.listen(3030, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
