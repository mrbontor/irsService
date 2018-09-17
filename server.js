var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('superagent');
var redis = require('redis');
var redisClient = redis.createClient({host : '10.16.1.141', port : 6379});


app.use(bodyParser.json())

// const db = require('./app/config/db.config.js');
// const client = require('./app/config/conf_redis.js');


//start redis
redisClient.on('ready', function() {
 console.log("Redis is ready");
});

redisClient.hmget("nodejsredis", "idtrx","status", function(err, [idtrx,status]) {
 	console.log(err)
 	console.log(idtrx)
 	console.log(status)
})



require('./app/route/transaksiDetail.route.js')(app);
// require('./app/route/transaksiIrs.route.js')(app);
// require('./app/route/transFromRedis.route.js')(app);


// Create a Server
var server = app.listen(3030, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})

module.exports = {
	redisClient: redisClient
}