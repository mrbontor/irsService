var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('Redis client connected');
});

var port =6379;
var host = '10.16.1.141';
var redisClient = redis.createClient(port, host);

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
