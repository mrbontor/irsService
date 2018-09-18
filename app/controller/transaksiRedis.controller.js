const dbRedis = require('../config/conf_redis.js');

exports.hmget = async (req, res) => {
  let key = "nodejsredis"
  let idtrx = "idtrx"
  let status = "status"

  //if you want to use 
  // let transaksiRedis = await dbRedis.hmgetAsync(key, "idtrx", "status")
  // res.json(transaksiRedis)

  dbRedis.hmgetAsync(key, idtrx, status).then((transaksiRedis) => {
    res.json(transaksiRedis);
      console.log(idtrx)
      console.log(status)
  });
};


exports.findById = async (req, res) => {
  let key = "nodejsredis"
  let idtrx = "idtrx"
  let status = "status"

  dbRedis.hmgetAsync(key, idtrx,status).then(function(transaksiRedis){
    res.json(transaksiRedis)
      console.log(idtrx)
  });
};