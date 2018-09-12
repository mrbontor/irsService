const axios = require('axios');
// const transaksiIrs;


// const id;
// const pin;
// const user;
// const pass;
// const kodeproduk;
// const tujuan;
// const counter;
// const idtrx;
const urlx = "http://10.16.1.44/webportal/api/h2h?";

axios.get('http://10.16.1.44/webportal/api/h2h?',{
	params:{
		id:'PA0001',
		pin:'1234',
		user:'8F2199',
		pass:'BFC5E7',
		kodeproduk:'TS10',
		tujuan:'085206458902',
		counter:'1',
		idtrx:'12345670'
	}
})
	.then(response => {
    	console.log(response.data.url);
    	console.log(response.data.explanation);
  	})
  	.catch(error => {
    	console.log(error);
  	});