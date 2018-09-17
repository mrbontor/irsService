var redis = require('redis');
var bluebird = require("bluebird");
// var redisClient = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);

var port =6379;
var host = '10.16.1.141';
var redisClient = redis.createClient(port, host);

redisClient.on('connect', function() {
    console.log('Redis client connected');
});

var key = "nodejsredis"

redisClient.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

redisClient.hmget(key, "idtrx","status", function(err, [idtrx,status]) {
	console.log(err)
 	console.log(idtrx)
 	console.log(status)
})

module.exports = redisClient;