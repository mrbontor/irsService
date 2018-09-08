const env = {
  database: 'payinm_db2',
  username: 'root',
  password: 'mrbontor',
  host    : 'localhost',
  dialect : 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;