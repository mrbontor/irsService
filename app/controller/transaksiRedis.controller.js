const dbRedis = require('../config/conf_redis.js');

// exports.hmget = (err, [idtrx,status]) => {
exports.hmget = async (req, res) => {
  let key = "nodejsredis"

  //if you want to use 
  // let transaksiRedis = await dbRedis.hmgetAsync(key, "idtrx", "status")
  // res.json(transaksiRedis)

  dbRedis.hmgetAsync(key, "idtrx", "status").then((transaksiRedis) => {
    res.json(transaksiRedis);
      console.log(idtrx)
      console.log(status)
  });
};
