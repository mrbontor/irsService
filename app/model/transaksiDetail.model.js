module.exports = (sequelize, Sequelize) => {
	const transaksiDetail = sequelize.define('inm_transaksi_detail',  {
	    id: {
	      type: Sequelize.INTEGER,
	      autoIncrement: true,
	      primaryKey: true,
	      allowNull: false,
	      unique: true,
	    },
	    transaksi_id:{
	    	type: Sequelize.BIGINT},
	    status_id:{
	    	type: Sequelize.BIGINT},
	    // id_pelanggan:{
	    // 	type: Sequelize.TEXT},
	    nama_pelanggan:{
	    	type: Sequelize.TEXT},
	    // lembar:{
	    // 	type: Sequelize.INTEGER},
	    // jumlah_tagihan:{
	    // 	type: Sequelize.DECIMAL},
	    // biaya_admin:{
	    // 	type: Sequelize.DECIMAL},
	    // total_tagihan:{
	    // 	type: Sequelize.DECIMAL},
	    // produk_id:{
	    // 	type: Sequelize.INTEGER},
	    // inm_referensi:{
	    // 	type: Sequelize.TEXT},
	    // referensi_vendor:{
	    // 	type: Sequelize.TEXT},
	    // terbilang:{
	    // 	type: Sequelize.TEXT},
	    // print_out:{
	    // 	type: Sequelize.TEXT},
	    // keterangan:{
	    	// type: Sequelize.TEXT},
	    response_message:{
	    	type: Sequelize.TEXT},
	    // tgl_create:{
	    // 	type: Sequelize.DATE},
	    // tgl_update:{
	    // 	type: Sequelize.DATE},
	  },{
	    timestamps: false,
	    tableName: 'inm_transaksi_detail'
	  });
	
	return transaksiDetail;
}
