const mysql = require('mysql2');

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db',
};

module.exports = mysql.createConnection(config).promise();
