module.exports = function(app) {
 
    const transaksiIrs = require('../controller/transaksiIrs.controller.js');
 
    app.get('/api/transaksiIrs', transaksiIrs.axios);
 
    // app.get('/api/transaksiIrs/:transaksi_id', transaksiIrs.findById);
 
    // app.put('/api/transaksiIrs/:transaksi_id', transaksiIrs.update);
 
    // app.delete('/api/transaksiIrs/:transaksi_id', transaksiIrs.delete);
}