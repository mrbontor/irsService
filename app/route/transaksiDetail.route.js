module.exports = function(app) {
 
    const transaksiDetail = require('../controller/transaksiDetail.controller.js');
 
    app.post('/api/transaksiDetail', transaksiDetail.create);
 
    app.get('/api/transaksiDetail', transaksiDetail.findAll);
 
    app.get('/api/transaksiDetail/:transaksi_id', transaksiDetail.findById);
 
    app.put('/api/transaksiDetail/:transaksi_id', transaksiDetail.update);
 
    app.delete('/api/transaksiDetail/:transaksi_id', transaksiDetail.delete);
}