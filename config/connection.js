const mysql = require('mysql2');

let config;

if (process.env.JAWSDB_URL) {
  config = process.env.JAWSDB_URL;
} else {
  config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db',
  };
}

module.exports = mysql.createConnection(config).promise();
