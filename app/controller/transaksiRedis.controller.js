const express = require('express');
const responseTime = require('response-time')
const axios = require('axios');
const redis = require('redis');
var redisClient = redis.createClient({host : '10.16.1.141', port : 6379});



//start redis
redisClient.on('ready', function() {
 console.log("Redis is ready");
});


exports.get = (err, res) => {
  redisClient.get("transaksi", function(err,result) {
    console.log(err);
    console.log('GET result ->' + result);
  });
};


// redisClient.get("transaksi", function(err,result) {
//  console.log(err);
//  console.log('GET result ->' + result);
// });

// // Extract the query from url and trim trailing spaces
//   const query = (req.query.query).trim();
//   // Build the Wikipedia API url
//   const searchUrl = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${query}`;

//   // Try fetching the result from Redis first in case we have it cached
//   return client.get(`wikipedia:${query}`, (err, result) => {
//     // If that key exist in Redis store
//     if (result) {
//       const resultJSON = JSON.parse(result);
//       return res.status(200).json(resultJSON);
//     } else { // Key does not exist in Redis store
//       // Fetch directly from Wikipedia API
//       return axios.get(searchUrl)
//         .then(response => {
//           const responseJSON = response.data;
//           // Save the Wikipedia API response in Redis store
//           client.setex(`wikipedia:${query}`, 3600, JSON.stringify({ source: 'Redis Cache', ...responseJSON, }));
//           // Send JSON response to client
//           return res.status(200).json({ source: 'Wikipedia API', ...responseJSON, });
//         })
//         .catch(err => {
//           return res.json(err);
//         });
//     }
//   });



// const respond = (idtrx, repositories) => {
//     return `Transaksi "${idtrx}" has ${repositories} public repositories.`;
// };

// const getUserRepos = (req, res) => {
//     let idtrx = req.query.idtrx;
//     request.get(`https://api.github.com/users/${idtrx}/repos`, function (err, response) {
//         if (err) throw err;
//         let repoLength = response.body.length;
//         res.send(respond(idtrx, repoLength));
//     });
// };
// const getTransasi req.query.idtrx