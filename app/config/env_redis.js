// let
//   redis     = require('redis'),
//   /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
//   client    = redis.createClient({
//     port      : 6379,               // replace with your port
//     host      : '10.16.1.105',        // replace with your hostanme or IP address
//     password  : '1',    // replace with your password
//     // optional, if using SSL
//     // use `fs.readFile[Sync]` or another method to bring these values in
//     tls       : {
//       key  : idtrx,  
//       cert : stringValueOfCertFile,
//       ca   : [ stringValueOfCaCertFile ]
//     }
//   });