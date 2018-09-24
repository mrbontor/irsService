const db = require('../config/db.config.js');
const TransaksiDetail = db.transDetil;

exports.create = (req, res) => {	
	TransaksiDetail.create({  
	  //field for transaksi
	  //ex : transaksi_id: req.body.transaksi_id,
	}).then(transaksiDetail => {		
		res.send(transaksiDetail);
	});
};
 
exports.findAll = (req, res) => {
	TransaksiDetail.findAll().then(transDetil => {
	  res.send(transDetil);
	});
};

exports.findById = (req, res) => {	
	const id_transaksi = req.params.transaksi_id;

	TransaksiDetail.findById(req.params.transaksi_id).then(transDetil => {
		res.send(transDetil);
	})
};

exports.update = (req, res) => {
	const id_transaksi = req.params.transaksi_id;
	TransaksiDetail.update(
		{status_id: req.body.status_id, response_message: req.body.response_message},
		{where: {transaksi_id: req.params.transaksi_id} }
	).then(() => {
	 	res.status(200).send("updated successfully a detil transaksi with id = " + id_transaksi);
	})
	.catch(err => {
    	console.error('Unable to connect to the database:', err);
  	});
};
 
exports.delete = (req, res) => {
	const id_transaksi = req.params.transaksi_id;
	TransaksiDetail.destroy({
	  where: { transaksi_id: id_transaksi }
	}).then(() => {
	  res.status(200).send('deleted successfully a detil transaksi with id = ' + id_transaksi);
	});
};