const dbRedis = require('../config/conf_redis.js');
// const TransaksiRedis = dbRedis;


// exports.hmget = (err, [idtrx,status]) => {
exports.hmget = async (req, res) => {
  let key = "nodejsredis"

  // let transaksiRedis = await dbRedis.hmgetAsync(key, "idtrx", "status")
  // res.json(transaksiRedis)

  dbRedis.hmgetAsync(key, "idtrx", "status").then((transaksiRedis) => {
    res.json(transaksiRedis);
      console.log(idtrx)
      console.log(status)
  });
};


// redisClient.hmget("nodejsredis", "idtrx","status", function(err, [idtrx,status]) {
//   console.log(err)
//   console.log(idtrx)
//   console.log(status)
// })