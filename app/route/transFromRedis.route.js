var chmodule.exports = function(app) {
 
    const getUserRepos = require('../controller/transRedis.controller.js');
 
    app.get('users', getUserRepos);
 
 
}