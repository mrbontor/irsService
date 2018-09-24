var redis = require('redis');
var bluebird = require("bluebird");
// var redisClient = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);

var port =6379;
var host = '10.16.1.191';
// var host = '10.16.1.191';
var redisClient = redis.createClient(port, host);

redisClient.on('connect', function() {
    console.log('Redis client connected');
});

var key = "nodejsredis"

redisClient.on('error', function (err) {
    console.log('Something went wrong ' + err);
});


let id = Math.floor(Math.random()*1000000);
  // var key = "idtrans"+id
  let i=1
  let keys = "nodejsredis"+i
  let idtrx = "123456789"
  let status = 2
redisClient.hmset(keys, ["idtrx", idtrx, "status", status], function (err, res) {});

//test get redis
redisClient.hmget("nodejsredis1", "idtrx","status", function(err, [idtrx,status]) {
	console.log(err)
 	console.log(idtrx)
 	console.log(status)
})
module.exports = redisClient;