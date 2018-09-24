const dbRedis = require('../config/conf_redis.js');

exports.hmget = async (req, res) => {
  let key = "nodejsredis1"
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
  let key = "nodejsredis1"
  let idtrx = "idtrx"
  let status = "status"

  dbRedis.hmgetAsync(key, idtrx,status).then(function(transaksiRedis){
    res.json(transaksiRedis)
      console.log(idtrx)
  });
};



exports.create = async (req, res) => {
  let id = Math.floor(Math.random()*1000000);
  // var key = "idtrans"+id
  let i=1
  let key = "nodejsredis"+i
  let idtrx = id
  let status = 1

  // dbRedis.hmset(key, idtrx,status).then(function(transaksiRedis){
  //   res.json(transaksiRedis)
  //     console.log(idtrx)
  // });
  dbRedis.hmset(key, ["idtrx", idtrx, "status", status]).then(function(transaksiRedis){
    res.json(transaksiRedis)
  });
};