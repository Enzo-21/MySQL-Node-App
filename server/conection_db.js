var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '',
    database : 'escuela',
  });

module.exports = {db};